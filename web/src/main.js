import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";

import "./app.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  mounted() {
    //So that the prerenderer knows when to take the snapshot
    document.dispatchEvent(new Event("render-event"));
  },
}).$mount("#app");
