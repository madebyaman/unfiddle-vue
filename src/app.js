import Vue from "vue";
import App from "./App.vue";
import PortalVue from "portal-vue";

Vue.use(PortalVue);
new Vue({
  el: "#app",
  render: h => h(App)
});
