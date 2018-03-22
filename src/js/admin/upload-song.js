{
    let view={
        el:'.uploadArea',
        find(selector){
            return $(this.el).find(selector)[0]
        }
    }
    let model={
        data:{
            status:'open'
        }
    }
    let controller={
        init(view,model){
            this.view=view
            this.model=model
        },
        initQiniu(){
            var uploader = Qiniu.uploader({
                runtimes: 'html5',      // 上传模式，依次退化
                browse_button: this.view.find('#uploadButton'),         // 上传选择的点选按钮，必需
                uptoken_url: 'http://localhost:8888/uptoken',         // Ajax请求uptoken的Url，强烈建议设置（服务端提供）
                get_new_uptoken: false,             // 设置上传文件的时候是否每次都重新获取新的uptoken
                domain: 'p42szxse5.bkt.clouddn.com',   // bucket域名，下载资源时用到，必需
                max_file_size: '40mb',             // 最大文件体积限制
                max_retries: 3,                     // 上传失败最大重试次数
                dragdrop: true,                     // 开启可拖曳上传
                drop_element: this.view.find('#uploadContainer'),          // 拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
                chunk_size: '4mb',                  // 分块上传时，每块的体积
                auto_start: true,                   // 选择文件后自动上传，若关闭需要自己绑定事件触发上传
                init: {
                    'FilesAdded': function (up, files) {
                        plupload.each(files, function (file) {
                        });
                    },
                    'BeforeUpload': (up, file)=> {
                        window.eventHub.emit('beforeUpload')
                        if(this.model.data.status==='closed'){
                            return false
                        }else{
                            this.model.data.status='closed'
                            return true
                        }
                    },
                    'UploadProgress': (up, file)=>{
                    },
                    'FileUploaded': (up, file, info)=>{
                        window.eventHub.emit('afterUpload')
                        this.model.data.status='closed'
                        var domain = up.getOption('domain');
                        var response = JSON.parse(info.response);
                        var sourceLink = 'http://' + domain + "/" + encodeURIComponent(response.key);
                        uploadStatus.textContent = sourceLink + ' ' + response.key;
                        window.eventHub.emit('new',{
                            url:sourceLink,
                            name:response.key,
                        })
                    },
                    'Error': function (up, err, errTip) {
                    },
                    'UploadComplete': function () {
                    }
                }
            });
        }
    }
    controller.init(view,model)

    controller.initQiniu()

}