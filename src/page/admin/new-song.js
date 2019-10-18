import EventHub from 'js/event-hub.js'

let view = {
  el: ".newSong",
  template: `
        新建歌曲
        `,
  render(data) {
    $(this.el).html(this.template);
  }
};
let model = {};
let controller = {
  init(view, model) {
    this.view = view;
    this.model = model;
    this.view.render(this.model.data);
    this.active();
    EventHub.on("new", data => {
      this.active();
    });
    EventHub.on("select", data => {
      this.deactive();
    });
    $(this.view.el).on("click", () => {
      EventHub.emit("new");
      EventHub.emit("addMode");
    });
  },
  active() {
    $(this.view.el).addClass("active");
  },
  deactive() {
    $(this.view.el).removeClass("active");
  }
};
//controller.init(view, model);
export default { view, model, controller };
