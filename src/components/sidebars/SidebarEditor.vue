<template>
  <div>
    <div
      v-if="data && Object.prototype.hasOwnProperty.call(data, 'component')"
      class="capitalize component"
      @click="toggleChildren"
    >
      {{ component(data.component) }}
    </div>
    <template
      v-if="data && Object.prototype.hasOwnProperty.call(data, 'children')"
    >
      <sidebar-editor
        v-for="(child, index) in data.children"
        :key="child.id"
        :data="child"
        :showChildren="showBlocks || showChildren"
        :handleClick="handleClick"
        :path="path + '.children' + '[' + index + ']'"
      />
    </template>
    <template v-else>
      <div
        v-if="
          data &&
            Object.prototype.hasOwnProperty.call(data, 'block') &&
            showChildren
        "
        class="capitalize block"
      >
        <span @click="handleClick(data.content, path)">{{
          block(data.block)
        }}</span>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "SidebarEditor",
  props: {
    data: Object,
    showChildren: {
      type: Boolean,
      default: false
    },
    handleClick: {
      type: Function,
      required: false
    },
    path: String
  },
  data() {
    return {
      showBlocks: this.showChildren
    };
  },
  methods: {
    component: function(text) {
      return text + " Component";
    },
    block: function(text) {
      return text + " Block";
    },
    toggleChildren() {
      this.showBlocks = !this.showBlocks;
    }
  }
};
</script>
<style scoped>
.capitalize {
  text-transform: capitalize;
}
.block {
  transform: translate(25px);
}
.block,
.component {
  cursor: pointer;
  padding: 15px 5px;
}
</style>
