<template>
  <div>
    <Editor v-model="text" />
    <Headline v-model="heading" headingLevel="2" />
    <!-- <image-editor :src="img.src" :alt="img.alt" /> -->
    <button-editor v-model="link" />
    <portal-target name="editors"></portal-target>
  </div>
</template>
<script>
import Editor from "./components/Editor.vue";
import Headline from "./components/Headline.vue";
import ImageEditor from "./components/ImageEditor.vue";
import ButtonEditor from "./components/ButtonEditor.vue";
export default {
  name: "App",
  components: {
    Editor,
    Headline,
    ImageEditor,
    ButtonEditor
  },
  data() {
    return {
      text: "<p>Hello</p>",
      heading: "This world",
      img: {
        src:
          "https://copyblogger.com/wp-content/uploads/2017/01/attract-connect.jpg",
        alt: "Copyblogger"
      },
      link: {
        text: "Buy Now",
        url: "http://google.com"
      }
    };
  }
};
</script>
<style></style>
