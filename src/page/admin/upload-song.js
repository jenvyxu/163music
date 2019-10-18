import EventHub from 'js/event-hub.js'
import * as qiniu from 'qiniu-js'

let view = {
  el: "main>.uploadArea",
  template: ` 
            <div class="selectCover">
                <div class="addBtn">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-img"></use>
                    </svg>
                    <div class="">添加封面</div>                  
                </div>
                <div class="uploadBar">
                    <div class="progress"></div>
                </div>
                <input type="file" accept="image/jpg, image/png, image/jpeg, image/gif">
            </div>
            <div class="selectSong">
                <div class="addBtn">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-music"></use>
                    </svg>
                    <div>添加歌曲</div>
                </div>
                <div class="uploadBar">
                <div class="progress"></div>
            </div>
                <input type="file"  accept="audio/mp3">
            </div>
            <div class="uploadBtn">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-upload"></use>
                </svg>
                <div class="action">点击上传</div>
            </div>
            <!--<p>点击添加按钮或拖曳文件到此处（文件大小最好不要超过40MB）</p>-->`,
  render() {
    let $el = $(this.el);
    $el.html(this.template);
  },
  find(selector) {
    return $(this.el).find(selector)[0];
  }
};
let model = {
  data: {
    status: "open"
  }
};
let controller = {
  init(view, model) {
    this.view = view;
    this.model = model;
    this.view.render();
    this.bindEvents()
  },
  bindEvents() {
    //添加封面文件和歌曲文件
    let self = this;
    $(self.view.el)
      .find("uploadBtn")
      .css({
        border: "1px solid red"
      });
    $(this.view.el)
      .find("input")
      .on("click", function(e) {
        $(this)
          .unbind("change")
          .bind("change", function() {
            self.files = $(this)[0].files[0];
            if (self.files) {
              $(this)
                .prev()
                .addClass("ready");
            }
          });
      });

    $(this.view.el)
      .find(".uploadBtn")
      .on("click", function() {
        self.uploadFiles();
        EventHub.emit("uploading");
      });
    EventHub.on("editMode", function() {
      $(self.view.el).css({ display: "none" });
    });
    EventHub.on("addMode", function() {
      $(self.view.el).css({ display: "flex" });
    });
  },
  uploadFiles() {
    //向服务器获取token
    let self = this;
    $.ajax({
      url: "http://www.jenvyxu.xyz:4000/uptoken",
      success: function(res) {
        let token = JSON.parse(res).uptoken;
        let domain = JSON.parse(res).domain;
        let config = {
          useCdnDomain: true,
          disableStatisticsReport: false,
          retryCount: 6,
          region: qiniu.region.z2
        };
        let putExtra = {
          fname: "",
          params: {},
          mimeType: null
        };
        self.uploadWithQiniu(token, putExtra, config, domain);
      }
    });
  },
  uploadWithQiniu(token, putExtra, config, domain) {
    let self = this;
    let error = function(res) {};
    let songUrl;
    let coverUrl;
    let coverFile = $(this.view.el).find("input[type=file]")[0].files[0];
    let songFile = $(this.view.el).find("input[type=file]")[1].files[0];
    if (songFile) {
      let key = songFile.name;

      let next = function(res) {
        let total = res.total;
        $(self.view.el)
          .find(".progress")
          .eq(1)
          .css({ width: total.percent + "%" });
      };
      let complete = function(res) {
        setTimeout(() => {
          $(self.view.el)
            .find(".progress")
            .eq(1)
            .css({ width: 0 });
          $(self.view.el)
            .find(".uploadBar")
            .eq(1)
            .removeClass("ready");
        }, 500);
        songUrl = encodeURI(`http://${domain}/${key}`);
        EventHub.emit("setSongUrl", songUrl);
        EventHub.emit("uploadDone");
      };
      let subObject = {
        next: next,
        error: error,
        complete: complete
      };
      let observable = qiniu.upload(songFile, key, token, putExtra, config);
      let subscription = observable.subscribe(subObject);
    }

    if (coverFile) {
      let key = coverFile.name;
      let next = function(res) {
        let total = res.total;
        $(self.view.el)
          .find(".progress")
          .eq(0)
          .css({ width: total.percent + "%" });
      };
      let complete = function(res) {
        setTimeout(() => {
          $(self.view.el)
            .find(".progress")
            .eq(0)
            .css({ width: 0 });
          $(self.view.el)
            .find(".uploadBar")
            .eq(0)
            .removeClass("ready");
        }, 500);
        coverUrl = encodeURI(`http://${domain}/${key}`);
        EventHub.emit("setCoverUrl", coverUrl);
        EventHub.emit("uploadDone");
      };
      let subObject = {
        next: next,
        error: error,
        complete: complete
      };
      let observable = qiniu.upload(coverFile, key, token, putExtra, config);
      let subscription = observable.subscribe(subObject);
    }
  },
};

export default { view, model, controller };
