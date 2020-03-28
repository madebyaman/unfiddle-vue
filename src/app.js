import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import PortalVue from "portal-vue";

Vue.use(PortalVue);
new Vue({
  store,
  el: "#app",
  render: h => h(App)
});
