<template>
  <form @submit.prevent="uploadImage">
    <label for="file">Pick an image</label>
    <input type="file" name="file" id="file" />
    <button type="submit">Submit</button>
  </form>
</template>
<script>
export default {
  name: "ImageEditor",
  props: ["attr"],
  methods: {
    uploadImage(e) {
      this.$emit("edited");
      console.log("uploading file", e);
    }
  }
};
</script>
