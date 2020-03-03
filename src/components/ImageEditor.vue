<template>
  <fragment>
    <img
      :src="attr.src"
      :alt="attr.alt"
      @click.prevent="showEditor = true"
      :class="className"
    />
    <portal to="editors" v-if="showEditor">
      <form @submit.prevent="uploadImage">
        <label for="file">Pick an image</label>
        <input type="file" name="file" id="file" />
        <button type="submit">Submit</button>
      </form>
    </portal>
  </fragment>
</template>
<script>
import { Fragment } from "vue-fragment";
export default {
  name: "ImageEditor",
  components: {
    Fragment
  },
  props: ["attr", "className"],
  data() {
    return {
      showEditor: false
    };
  },
  methods: {
    uploadImage(e) {
      console.log("uploading file", e);
      this.showEditor = false;
    }
  }
};
</script>
