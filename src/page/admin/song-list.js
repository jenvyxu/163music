import EventHub from 'js/event-hub.js'
import AV from 'leancloud-storage'
import 'js/av.js' //初始AV

let view = {
  el: "#songList-containner",
  template: `
                 <ul class="songList">   
                </ul>`,
  render(data) {
    let $el = $(this.el);
    $el.html(this.template);
    let { songs, selectSongId } = data;
    let liList = songs.map(song => {
      let $li = $("<li></li>")
        .text(song.name)
        .attr("data-song-id", song.id);
      if (song.id === selectSongId) {
        $li.addClass("active");
      }
      return $li;
    });
    $el.find("ul").empty();
    liList.map(domLi => {
      $el.find("ul").append(domLi);
    });
  },
  clearActive() {
    $(this.el)
      .find(".active")
      .removeClass("active");
  }
};

let model = {
  data: {
    songs: [],
    selectSongId: undefined
  },
  find() {
    let query = new AV.Query("Song");
    return query.find().then(songs => {
      this.data.songs = songs.map(song => {
        //return {id:song.id,...song.attributes}
        return {
          id: song.id,
          cover: song.attributes.cover,
          lyrics: song.attributes.lyrics,
          name: song.attributes.name,
          url: song.attributes.url,
          singer: song.attributes.singer
        };
      });
      return songs;
    });
  }
};
let controller = {
  init(view, model) {
    this.view = view;
    this.model = model;
    this.model.find();
    this.view.render(this.model.data);
    this.bindEvents();
    this.bindEventHub();
    this.getAllSongs();
  },
  getAllSongs() {
    return this.model.find().then(() => {
      this.view.render(this.model.data);
    });
  },
  bindEvents() {
    $(this.view.el).on("click", "li", e => {
      let songId = e.currentTarget.getAttribute("data-song-id");
      this.model.data.selectSongId = songId;
      this.view.render(this.model.data);
      let data;
      let songs = this.model.data.songs;
      for (let i = 0; i < songs.length; i++) {
        if (songs[i].id === songId) {
          data = songs[i];
          break;
        }
      }
      EventHub.emit("select", JSON.parse(JSON.stringify(data)));
      EventHub.emit("editMode");
    });
  },
  bindEventHub() {
    EventHub.on("create", songData => {
      this.model.data.songs.push(songData);
      this.view.render(this.model.data);
      $(this.view.el)
        .find("li")
        .removeClass("active");
    });

    EventHub.on("new", () => {
      this.view.clearActive();
    });
    EventHub.on("uploading", () => {
      $(this.view.el)
        .siblings(".uploadMask")
        .css({ display: "block" });
    });
    EventHub.on("uploadDone", () => {
      $(this.view.el)
        .siblings(".uploadMask")
        .css({ display: "none" });
    });
    EventHub.on("update", song => {
      let songs = this.model.data.songs;
      for (let i = 0; i < songs.length; i++) {
        if (songs[i].id === song.id) {
          Object.assign(songs[i], song);
        }
      }
      this.view.render(this.model.data);
    });
  }
};
//controller.init(view, model);
export default{ view, model, controller };
