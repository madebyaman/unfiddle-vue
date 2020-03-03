<template>
  <div class="application">
    <!-- <Editor v-model="text" />
    <Headline v-model="heading" headingLevel="2" />-->
    <!-- <image-editor :src="img.src" :alt="img.alt" /> -->
    <!-- <button-editor v-model="link" />-->
    <Sidebar :data="data" @saveContent="save" />
    <!-- <Ebook :data="data" class="page" /> -->
  </div>
</template>
<script>
import axios from "axios";
import Ebook from "./templates/Ebook.vue";
import Sidebar from "./components/sidebars/Sidebar.vue";
export default {
  name: "App",
  components: {
    Ebook,
    Sidebar
  },
  data() {
    return {
      data: null
    };
  },
  created: function() {
    axios
      .get("ebook.json")
      .then(res => (this.data = res.data))
      .catch(err => console.error(err));
  },
  methods: {
    save(path, content) {
      eval(path).content = content;
    }
  }
};
</script>
<style>
.application {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
</style>
