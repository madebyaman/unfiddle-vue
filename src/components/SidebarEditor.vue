<template>
  <div>Editing component {{ data.id }}</div>
</template>
<script>
export default {
  name: "SidebarEditor",
  props: {
    data: {
      required: true
    }
  }
};
</script>
