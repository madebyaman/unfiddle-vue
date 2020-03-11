<template>
  <div class="application">
    <sidebar :data="data" @update="update" />
    <page-tree :data="data" @save="save" />
  </div>
</template>
<script>
import axios from "axios";
// Todo
// Add Component
// Design Component
import PageTree from "./components/PageTree.vue";
import Sidebar from "./components/Sidebars/Sidebar.vue";
export default {
  name: "App",
  components: {
    PageTree,
    Sidebar
  },
  data() {
    return {
      data: null,
      currentlyEditingNode: null,
      openEditor: null
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
    },
    update(path, content) {
      eval(path).options = content;
    }
  }
};
</script>
<style>
.application {
  display: grid;
  grid-template-columns: 1fr 3fr;
}
</style>
