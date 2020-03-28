import axios from "axios";
const state = {
  page: {},
  componentsToAdd: [],
  isEditing: false
};

const getters = {
  getPage: state => state.page,
  getComponentsToAdd: state => state.componentsToAdd,
  getEditingStatus: state => state.isEditing
};

const mutations = {
  addPageContent: (state, content) => (state.page = content),
  addComponentsContent: (state, content) => (state.componentsToAdd = content),
  saveContent: (state, { path, content }) => {
    const newPath = `state.page.${path}`;
    eval(newPath).content = content;
  },
  saveOptions: (state, options, path) =>
    (state.page.eval(path).options = options),
  saveStyle: (state, style, path) => (state.page.eval(path).style = style),
  addNewComponent: (state, component) => state.page.children.push(component),
  changeEditingStatus: (state, status) => (state.isEditing = status)
};

const actions = {
  async fetchContents({ commit }) {
    const data = (await axios.get("ebook.json")).data;
    commit("addPageContent", data);
    const components = data.children.slice(0);
    commit("addComponentsContent", components);
  },
  addNewComponent({ commit }, index) {
    const newComponent = {
      ...Object.assign({}, state.componentsToAdd[index]),
      id: Math.floor(Math.random() * 100)
    };
    commit("addNewComponent", newComponent);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
