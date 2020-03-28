<template>
  <div class="page">
    <div
      :class="getPage.attrs.class"
      v-if="checkObjectProperty(getPage, 'children')"
    >
      <block
        v-for="(child, index) in getPage.children"
        :key="child.id"
        :data="child"
        :path="'children' + '[' + index + ']'"
      >
        <div @click.stop="editComponent(index)">
          Edit Component {{ child.id }}
        </div>
      </block>
    </div>
    <portal to="sidebar" v-if="getEditingStatus"
      ><sidebar-editor :data="getPage.children[index]" />
    </portal>
  </div>
</template>
<script>
import Block from "./Block.vue";
import SidebarEditor from "./SidebarEditor.vue";
import { mapGetters, mapMutations } from "vuex";
import { checkObjectProperty } from "../utils.js";
export default {
  name: "PageTree",
  data() {
    return {
      showAddComponentMenu: true,
      index: undefined
    };
  },
  computed: mapGetters(["getPage", "getEditingStatus"]),
  components: {
    Block,
    SidebarEditor
  },
  methods: {
    checkObjectProperty,
    ...mapMutations(["changeEditingStatus"]),
    editComponent(index) {
      console.log(index);
      this.index = index;
      this.changeEditingStatus(true);
    }
  }
};
</script>
