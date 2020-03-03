<template>
  <fragment>
    <div v-html="value" @click.prevent="showEditor = !showEditor"></div>
    <portal to="editors" v-if="showEditor">
      <div class="text-editor">
        <editor-menu-bar
          :editor="editor"
          v-slot="{ commands, isActive, getMarkAttrs }"
        >
          <div class="menubar">
            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.bold() }"
              @click="commands.bold"
            >
              Bold
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.italic() }"
              @click="commands.italic"
            >
              Italic
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.strike() }"
              @click="commands.strike"
            >
              Strike
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.underline() }"
              @click="commands.underline"
            >
              Underline
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.paragraph() }"
              @click="commands.paragraph"
            >
              Paragraph
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.heading({ level: 2 }) }"
              @click="commands.heading({ level: 2 })"
            >
              H2
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.heading({ level: 3 }) }"
              @click="commands.heading({ level: 3 })"
            >
              H3
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.bullet_list() }"
              @click="commands.bullet_list"
            >
              Ul
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.ordered_list() }"
              @click="commands.ordered_list"
            >
              ol
            </button>

            <button
              class="menubar__button"
              :class="{ 'is-active': isActive.blockquote() }"
              @click="commands.blockquote"
            >
              Quote
            </button>

            <button class="menubar__button" @click="commands.horizontal_rule">
              hr
            </button>

            <form
              class="menububble__form"
              v-if="linkMenuIsActive"
              @submit.prevent="setLinkUrl(commands.link, linkUrl)"
            >
              <input
                class="menububble__input"
                type="text"
                v-model="linkUrl"
                placeholder="https://"
                ref="linkInput"
                @keydown.esc="hideLinkMenu"
              />
              <button class="menububble__button" type="submit">
                Add
              </button>
            </form>

            <template v-else>
              <button
                class="menububble__button"
                @click="showLinkMenu(getMarkAttrs('link'))"
                :class="{ 'is-active': isActive.link() }"
              >
                <span>{{ isActive.link() ? "Update Link" : "Add Link" }}</span>
                link
              </button>
            </template>

            <button class="menubar__button" @click="commands.undo">
              Undo
            </button>

            <button class="menubar__button" @click="commands.redo">
              Redo
            </button>
          </div>
        </editor-menu-bar>
        <editor-content :editor="editor" />
        <button @click.prevent="updateContent">
          Save
        </button>
      </div>
    </portal>
  </fragment>
</template>
<script>
import { Fragment } from "vue-fragment";
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import {
  Blockquote,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  Bold,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from "tiptap-extensions";
export default {
  name: "Editor",
  components: {
    EditorContent,
    EditorMenuBar,
    Fragment
  },
  data() {
    return {
      showEditor: false,
      linkUrl: null,
      linkMenuIsActive: false,
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new Link(),
          new BulletList(),
          new HardBreak(),
          new Heading({ levels: [2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new Link(),
          new Bold(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History()
        ],
        content: this.value
      })
    };
  },
  props: ["value"],
  beforeDestroy() {
    this.editor.destroy();
  },
  methods: {
    updateContent() {
      this.showEditor = false;
      this.$emit("input", this.editor.getHTML());
    },
    showLinkMenu(attrs) {
      this.linkUrl = attrs.href;
      this.linkMenuIsActive = true;
      this.$nextTick(() => {
        this.$refs.linkInput.focus();
      });
    },
    hideLinkMenu() {
      this.linkUrl = null;
      this.linkMenuIsActive = false;
    },
    setLinkUrl(command, url) {
      command({ href: url });
      this.hideLinkMenu();
    }
  }
};
</script>
<style>
.text-editor a {
  pointer-events: none;
}
</style>
