{
    let view={
        el:'main>.uploadArea',
        template:`
                <div id="uploadContainer" class="draggable">
                    <div id="uploadButton" class="clickable">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-loading"></use>
                    </svg>      
                    <p>文件上传中...</p>                        
                    </div>
                </div>`,
        show(){
            $(this.el).addClass('active')
            $(this.el).html(this.template)
        },
        hide(){
            let html=`
                <div id="uploadContainer" class="draggable">
                    <div id="uploadButton" class="clickable">
                    <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-add"></use>
                    </svg>
                    <p>点击添加按钮或拖曳文件到此处（文件大小最好不要超过40MB）</p>
                </div>
                </div>`
            $(this.el).removeClass('active')
            $(this.el).html(html)

        }
    }
    let controller={
        init(view){
            this.view=view
            this.bindEventHub()
        },
        bindEventHub(){
            window.eventHub.on('beforeUpload',()=>{
                this.view.show()
            })
            window.eventHub.on('afterUpload',()=>{
                this.view.hide()
            })
        }
    }
    controller.init(view)
}
