<template>
  <div class="application">
    <!-- <sidebar :data="data" @update="update" /> -->
    <sidebar />
    <page-tree
      @save="save"
      @addComponent="id => addComponent(id)"
      @editingComponent="editComponent = true"
    />
  </div>
</template>
<script>
import { mapActions } from "vuex";
// Todo
// Add Component
// Design Component
import PageTree from "./components/PageTree.vue";
import Sidebar from "./components/Sidebar.vue";
export default {
  name: "App",
  components: {
    PageTree,
    Sidebar
  },
  data() {
    return {
      currentlyEditingNode: null,
      openEditor: null,
      showAddComponentMenu: true,
      editComponent: false,
      index: undefined
    };
  },
  created: function() {
    this.fetchContents();
  },
  methods: {
    ...mapActions(["fetchContents"]),
    save(path, content) {
      eval(path).content = content;
    },
    update(path, content) {
      eval(path).options = content;
    },
    addComponent(id) {
      const newChild = Object.assign(
        {},
        this.data.children.slice(id, id + 1)[0]
      );
      newChild.id = Math.floor(Math.random() * 100);
      this.data.children.push(newChild);
    },
    editingComponent(index) {
      this.index = index;
      this.editComponent = true;
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
