<template>
  <div v-html="value"></div>
</template>
<script>
export default {
  name: "RenderMain",
  data() {
    return {};
  },
  props: ["value"]
};
</script>
