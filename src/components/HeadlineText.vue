<script>
export default {
  name: "HeadlineText",
  props: ["value", "level"],
  render: function(createElement) {
    return createElement("h" + this.level, {
      on: {
        click: () => this.$emit("showEditor")
      },
      domProps: {
        innerHTML: this.value
      }
    });
  }
};
</script>