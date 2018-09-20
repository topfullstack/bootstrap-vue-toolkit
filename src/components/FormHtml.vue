<template>
  <HtmlEditor :content="value" @change="$emit('input', arguments[0])" />
</template>

<script>
import 'font-awesome/css/font-awesome.css'
import VueHtml5Editor from 'vue-html5-editor'
const HtmlEditor = new VueHtml5Editor({

})
export default {
  components: {
    HtmlEditor
  },
  props: {
    value: String,
  },
}
</script>
