<template>
  <div class="editor" style="opacity: 0.5">
    <headline-text :value="value" :level="headingLevel" @showEditor="showEditor = true" />
    <portal to="editors" v-if="showEditor">
      <div class="text-editor">
        <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
          <div class="menubar">
            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.bold() }"
              @click="commands.bold"
            >Bold</button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.italic() }"
              @click="commands.italic"
            >Italic</button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.underline() }"
              @click="commands.underline"
            >Underline</button>
          </div>
        </editor-menu-bar>
        <editor-content :editor="editor" />
        <button @click.prevent="updateContent">Save</button>
      </div>
    </portal>
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import HeadlineText from "./HeadlineText.vue";
import { Underline, Bold, Italic } from "tiptap-extensions";
export default {
  name: "Headline",
  components: {
    EditorContent,
    EditorMenuBar,
    HeadlineText
  },
  data() {
    return {
      showEditor: false,
      editor: new Editor({
        extensions: [new Bold(), new Italic(), new Underline()],
        content: this.value
      })
    };
  },
  props: ["value", "headingLevel"],
  beforeDestroy() {
    this.editor.destroy();
  },
  methods: {
    updateContent() {
      this.showEditor = false;
      this.$emit("input", this.editor.getHTML());
    }
  }
};
</script>

<style></style>
