<template>
  <div>
    <Editor v-model="text" />
    <Headline v-model="heading" />
    <portal-target name="editors"></portal-target>
  </div>
</template>
<script>
import Editor from "./components/Editor.vue";
import Headline from "./components/Headline.vue";
export default {
  name: "App",
  components: {
    Editor,
    Headline
  },
  data() {
    return {
      text: "<p>Hello</p>",
      heading: "<h2>This world</h2>"
    };
  }
};
</script>
<style></style>
