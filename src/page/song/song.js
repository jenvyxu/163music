import 'css/song.css'
import AV from 'leancloud-storage'
import EventHub from 'js/event-hub.js'
import 'js/av.js'

{
    let view = {
      el: "#app",
      init() {
        this.$el = $(this.el);
      },
      render(data) {
        let { song, status } = data;
        let { lyrics } = song;
        //提取歌词和时间轴
        if (this.$el.find("audio").attr("src") !== song.url) {
          lyrics.split("\n").map(string => {
            let p = document.createElement("p");
            let regex = /\[([\d:.]+)\](.*)/;
            let matches = string.match(regex);
            //有歌词的情况
            if (matches[2] !== "") {
              p.textContent = matches[2];
              let time = matches[1];
              let parts = time.split(":");
              let minutes = parts[0];
              let seconds = parts[1];
              let newTime = parseInt(minutes, 10) * 60 + parseFloat(seconds, 10);
              p.setAttribute("data-time", newTime);
              this.$el.find(".lyric>.lines").append(p);
            }
          });
          this.$el.find(".song-description>h1").text(song.name);
          $(".background").css("background-image", `url(${song.cover})`);
          this.$el.find("img.cover").attr("src", song.cover);
  
          let audio = this.$el
            .find("audio")
            .attr("src", song.url)
            .get(0);
          audio.onended = () => {
            EventHub.emit("songEnd");
          };
          audio.ontimeupdate = () => {
            this.showLyrics(audio.currentTime + 0.4); //提前0.4s显示歌词
          };
        }
  
        if (status === "playing") {
          this.$el.find(".disc-container").addClass("playing");
        } else {
          this.$el.find(".disc-container").removeClass("playing");
        }
      },
      play() {
        this.$el.find("audio")[0].play();
      },
      pause() {
        this.$el.find("audio")[0].pause();
      },
      showLyrics(time) {
        let allP = this.$el.find(".lyric>.lines>p");
        let p; //当前需要显示的那一行歌词对应的p元素
        for (let i = 0; i < allP.length; i++) {
          if (i === allP.length - 1) {
            //最后一行歌词
            p = allP[i];
            break;
          } else {
            let currentTime = allP.eq(i).attr("data-time");
            let nextTime = allP.eq(i + 1).attr("data-time");
            if (time < currentTime) {
              p = allP[0];
              break;
            } else if (currentTime <= time && time < nextTime) {
              p = allP[i];
              break;
            }
          }
        }
        let pHeight = p.getBoundingClientRect().top;
        let linesHeight = this.$el
          .find(".lyric>.lines")[0]
          .getBoundingClientRect().top;
        let height = pHeight - linesHeight; //将要显示歌词元素与lines元素的位置高度差
        //歌词滚动操作
        $(p)
          .addClass("active")
          .siblings(".active")
          .removeClass("active");
        this.$el.find(".lyric>.lines").css({
          transform: `translateY(${-height}px)`
        });
      }
    };
    let model = {
      data: {
        song: {
          id: "",
          name: "",
          singer: "",
          url: ""
        }
      },
      status: "paused",
      get(id) {
        var query = new AV.Query("Song");
        return query.get(id).then(song => {
          Object.assign(this.data.song, {
            id: song.id,
            cover: song.attributes.cover,
            url: song.attributes.url,
            name: song.attributes.name,
            singer: song.attributes.singer,
            lyrics: song.attributes.lyrics
          });
          return song;
        });
      }
    };
    let controller = {
      init(view, model) {
        this.view = view;
        this.view.init();
        this.model = model;
        let id = this.getSongId();
        this.model.get(id).then(() => {
          this.view.render(this.model.data);
        });
        this.bindEvents();
      },
  
      bindEvents() {
        $(this.view.el).on("click", ".icon-play", () => {
          this.model.data.status = "playing";
          this.view.render(this.model.data);
          this.view.play();
        });
        $(this.view.el).on("click", ".icon-pause", () => {
          this.model.data.status = "paused";
          this.view.render(this.model.data);
          this.view.pause();
        });
        EventHub.on("songEnd", () => {
          this.model.data.status = "paused";
          this.view.render(this.model.data);
          $(this.view.el)
            .find(".lyric>.lines")
            .css({
              transform: "translateY(0px)"
            });
        });
      },
      getSongId() {
        let search = window.location.search;
        if (search.indexOf("?") === 0) {
          search = search.substring(1);
        }
        let array = search.split("&").filter(v => v);
        let id = "";
        for (let i = 0; i < array.length; i++) {
          let kv = array[i].split("=");
          let key = kv[0];
          let value = kv[1];
          if (key === "id") {
            id = value;
            break;
          }
        }
        return id;
      }
    };
    controller.init(view, model);
  }
  