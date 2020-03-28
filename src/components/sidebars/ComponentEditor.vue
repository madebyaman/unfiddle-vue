<template>
  <div>
    <div @click="handleClick(true)">
      {{ name }}
    </div>
    <portal to="sidebar-components" v-if="isEditing">
      <div>
        <p @click="handleClick(false)">Back</p>
        <label for="backgroundColor">Background Color</label>
        <input type="text" v-model="backgroundColor" />
        <p>Enter HEX code</p>
        <button @click="handleSubmit">Submit</button>
      </div>
    </portal>
  </div>
</template>
<script>
export default {
  name: "ComponentEditor",
  props: ["name", "data", "className", "path"],
  data() {
    return {
      isEditing: false,
      backgroundColor: ""
    };
  },
  watch: {
    isEditing() {
      if (
        this.data &&
        Object.prototype.hasOwnProperty.call(this.data, "style") &&
        Object.prototype.hasOwnProperty.call(this.data.style, "backgroundColor")
      ) {
        this.backgroundColor = this.data.style.backgroundColor;
      }
    }
  },
  methods: {
    handleClick(state) {
      this.isEditing = state;
      this.$emit("editing", state);
    },
    handleSubmit() {
      const newOptions = {
        style: {
          backgroundColor: this.backgroundColor
        }
      };
      this.$emit("updateOptions", this.path, newOptions);
    }
  }
};
</script>
