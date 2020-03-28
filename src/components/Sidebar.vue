<template>
  <div>
    <div v-if="getPage !== null">
      <h3>Page Settings</h3>
      <div v-if="!getEditingStatus">
        <div
          v-if="checkObjectProperty(getPage, 'children')"
          v-for="(child, index) in getPage.children"
          :key="child.id"
          :data="child"
          @click.stop="editComponent(index)"
        >
          component {{ child.id }}
        </div>
      </div>
      <div>
        <portal-target name="sidebar"> </portal-target>
        <button @click.stop="showAddComponentMenu = true">Add block</button>
        <div v-show="showAddComponentMenu">
          <div
            v-for="(child, index) in getComponentsToAdd"
            :key="child.id"
            @click.stop="addNewComponent(index)"
          >
            {{ child.component }}
          </div>
        </div>
      </div>
    </div>
    <portal to="sidebar" v-if="getEditingStatus"
      ><sidebar-editor :data="componentToEdit" />
    </portal>
  </div>
</template>
<script>
import { checkObjectProperty } from "../utils.js";
import { mapGetters, mapMutations, mapActions } from "vuex";
import SidebarEditor from "./SidebarEditor.vue";
export default {
  name: "Sidebar",
  components: {
    SidebarEditor
  },
  data() {
    return {
      componentToEdit: null,
      showAddComponentMenu: true
    };
  },
  computed: mapGetters(["getPage", "getEditingStatus", "getComponentsToAdd"]),
  methods: {
    checkObjectProperty,
    ...mapMutations(["changeEditingStatus"]),
    ...mapActions(["addNewComponent"]),
    editComponent(id) {
      this.componentToEdit = Object.assign({}, this.getPage.children[id]);
      this.changeEditingStatus(true);
    }
  }
};
</script>
