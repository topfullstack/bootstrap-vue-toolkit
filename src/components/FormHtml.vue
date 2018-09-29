<template>
  <!-- <quill-editor :value="value" @input="$emit('input', arguments[0])" :options="options" /> -->
  <vue-html5-editor :content="value" @change="$emit('input', arguments[0])" :options="options" />
</template>

<script>
// import "quill/dist/quill.core.css";
// import "quill/dist/quill.snow.css";
// import "quill/dist/quill.bubble.css";
// import { quillEditor } from "vue-quill-editor";
import 'font-awesome/css/font-awesome.css'
import VueHtml5Editor from 'vue-html5-editor'

export default {
  components: {
    // HtmlEditor: quillEditor
    VueHtml5Editor: new VueHtml5Editor({})
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

<style>
.vue-html5-editor>.toolbar>.dashboard button{
  line-height: 1em;

}
.vue-html5-editor>.toolbar>.dashboard input[type=text], .vue-html5-editor>.toolbar>.dashboard input[type=number], .vue-html5-editor>.toolbar>.dashboard select {
  line-height: 1em;
}
</style>
