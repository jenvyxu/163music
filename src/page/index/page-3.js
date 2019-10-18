import EventHub from "js/event-hub.js";
let view = {
  el: ".page-3",
  template: `
                <div class="search">
            <form action="">
                <input type="text" placeholder="搜索歌曲、歌手、专辑">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-search"></use>
                </svg>
            </form>
        </div>
        <div class="hotResearch">
            <h3>热门搜索</h3>
            <ul>
                <li>毛不易</li>
                <li>E能量演出</li>
                <li>镇魂</li>
                <li>乐华七子NEXT</li>
                <li>薛之谦</li>
                <li>世界杯</li>
                <li>陈奕迅</li>
                <li>毕业季</li>
                <li>RADWIMPS</li>
                <li>E能量</li>
            </ul>
        </div>`,
  init() {
    this.$el = $(this.el);
  },
  show() {
    this.$el.addClass("active");
  },
  hide() {
    this.$el.removeClass("active");
  },
  render() {
    $(this.el).html(this.template);
  }
};
let model = {};
let controller = {
  init(view, model) {
    this.view = view;
    this.view.init();
    this.view.render();
    this.model = model;
    this.bindEventHub();
  },
  bindEventHub() {
    EventHub.on("selectTab", tabName => {
      if (tabName === "page-3") {
        this.view.show();
      } else {
        this.view.hide();
      }
    });
  }
};
// controller.init(view, model);
export default {
  view,
  model,
  controller
};
