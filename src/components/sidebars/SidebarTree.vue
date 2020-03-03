<template>
  <div class="tree">
    <sidebar-editor :data="data" :handleClick="toggleEditor" path="this.data" />
  </div>
</template>
<script>
import SidebarEditor from "./SidebarEditor.vue";
export default {
  name: "SidebarTree",
  props: ["data"],
  components: {
    SidebarEditor
  },
  methods: {
    toggleEditor(content, path) {
      this.$emit("edit", content, path);
    }
  }
};
</script>
