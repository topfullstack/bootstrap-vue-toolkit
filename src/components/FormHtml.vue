<template>
  <html-editor :value="value" @input="$emit('input', arguments[0])" :options="options" />
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
// import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";

export default {
  components: {
    HtmlEditor: quillEditor
  },
  props: {
    value: String,
    options: {
      type: Object,
      default(){
        return {
          
        }
      }
    }
  }
};
</script>
