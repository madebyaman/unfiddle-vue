import Vue from "vue";
import Vuex from "vuex";
import page from "./modules/page.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    page
  }
});
