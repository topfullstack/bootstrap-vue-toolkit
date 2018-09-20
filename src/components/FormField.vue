<template>
  <component 
  :is="field.tag || tag" v-bind="field"  :value="value" 
  @input="$emit('input', arguments[0])">
  </component>
</template>
<script>

export default {
  props: {
    name: String,
    field: Object,
    value: {},
  },
  computed: {
    tag(){
      const type = this.field.type
      if ([
        'textarea', 'radio-group', 'checkbox-group',
        'select', 'radio', 'checkbox', 'html', 'file',
        ].includes(type)) {
        return `b-form-${type}`
      }
      if (['radiolist', 'radios', 'radio-list'].includes(type)) {
        return 'b-form-radio-group'
      }
      if (['checkboxlist', 'checkboxes', 'checkbox-list'].includes(type)) {
        return 'b-form-checkbox-group'
      }

      return 'b-form-input'
    }
  },
}
</script>

