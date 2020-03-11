<template>
  <div
    class="sidebar"
    v-if="data && Object.prototype.hasOwnProperty.call(data, 'children')"
  >
    <div class="components" v-show="!editing">
      <component-editor
        v-for="(child, index) in data.children"
        :key="child.id"
        :path="path + '.children' + '[' + index + ']'"
        :data="child.options"
        :name="child.component"
        :className="child.attrs.class"
        @editing="state => toggleEditing(state)"
        @updateOptions="updateOptions"
      ></component-editor>
    </div>
    <div class="sidebar-components">
      <portal-target name="sidebar-components"> </portal-target>
    </div>
  </div>
</template>

<script>
import ComponentEditor from "./ComponentEditor.vue";
export default {
  name: "Sidebar",
  props: ["data"],
  components: {
    ComponentEditor
  },
  data() {
    return {
      path: "this.data",
      editing: false
    };
  },
  methods: {
    toggleEditing(state) {
      this.editing = state;
    },
    updateOptions(path, options) {
      this.$emit("update", path, options);
    }
  }
};
</script>

<style></style>
