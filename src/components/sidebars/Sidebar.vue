<template>
  <div>
    <SidebarTree :data="data" v-if="!showEditor" @edit="edit" />
    <transition name="slide">
      <div class="editors" v-if="showEditor">
        <headline :value="value" @edited="saveContent" />
      </div>
    </transition>
  </div>
</template>
<script>
import SidebarTree from "./SidebarTree.vue";
import Headline from "../editors/Headline.vue";
export default {
  name: "Sidebar",
  props: ["data"],
  components: {
    SidebarTree,
    Headline
  },
  data() {
    return {
      showEditor: false,
      value: null,
      node: null
    };
  },
  methods: {
    edit(content, path) {
      this.value = content;
      this.showEditor = true;
      this.node = path;
    },
    saveContent(content) {
      this.$emit("saveContent", this.node, content);
    }
  }
};
</script>
<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(10rem);
}
</style>
