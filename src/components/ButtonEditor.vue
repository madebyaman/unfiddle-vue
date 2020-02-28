<template>
  <div>
    <a :href="value.url" @click.prevent="showEditor = true">{{value.text}}</a>
    <portal to="editors" v-if="showEditor">
      <form @submit.prevent="updateLink">
        <label for="linkText">Button Text</label>
        <input type="text" id="linkText" v-model="text" />
        <label for="linkUrl">Button URL</label>
        <input type="url" id="linkUrl" v-model="url" />
        <button type="submit">Submit</button>
      </form>
    </portal>
  </div>
</template>
<script>
export default {
  name: "ButtonEditor",
  props: ["value"],
  data() {
    return {
      text: "",
      url: "",
      showEditor: false
    };
  },
  methods: {
    updateLink() {
      this.$emit("input", { text: this.text, url: this.url });
      this.showEditor = false;
    }
  }
};
</script>