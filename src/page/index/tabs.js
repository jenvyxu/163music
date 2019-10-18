import EventHub from 'js/event-hub.js'

let view = {
  el: "#tabs",
  init() {
    this.$el = $(this.el);
  }
};
let model = {};
let controller = {
  init(view, model) {
    this.view = view;
    this.view.init();
    this.model = model;
    this.bindEvents();
  },
  bindEvents() {
    this.view.$el.on("click", ".tabs-nav>li", e => {
      let $li = $(e.currentTarget);
      let pageName = $li.attr("data-tab-name");
      $li
        .addClass("active")
        .siblings()
        .removeClass("active");
      EventHub.emit("selectTab", pageName);
    });
  }
};
// controller.init(view, model);
export default {
  view,
  model,
  controller
};
