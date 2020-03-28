<template>
  <img :src="attrs.src" :alt="attrs.alt" :class="className" />
</template>
<script>
export default {
  name: "RenderImage",
  props: {
    attrs: {
      type: Object,
      require: true
    },
    className: {
      require: false,
      default: " "
    }
  }
};
</script>
