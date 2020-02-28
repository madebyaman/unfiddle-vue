<template>
  <div>
    <img :src="src" :alt="alt" @click.prevent="showEditor = true" />
    <portal to="editors" v-if="showEditor">
      <form @submit.prevent="uploadImage">
        <label for="file">Pick an image</label>
        <input type="file" name="file" id="file" />
        <button type="submit">Submit</button>
      </form>
    </portal>
  </div>
</template>
<script>
export default {
  name: "ImageEditor",
  props: ["src", "alt"],
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