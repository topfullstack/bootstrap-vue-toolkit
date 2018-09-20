<template>
  <div class="data-value">
    <img v-bind="field.attrs" :src="displayValue" alt="" v-if="type === 'image'">
    <video :src="displayValue" alt="" v-else-if="type === 'video'"></video>
    <audio :src="displayValue" alt="" v-else-if="type === 'audio'"></audio>
    <a :href="href" v-else-if="type === 'link'">{{displayValue}}</a>
    <span class="badge" :class="'badge-' + (displayValue ? 'success' : 'danger')" v-else-if="type === 'switch'">{{displayValue}}</span>
    <span v-text="formatDateTime(displayValue, field.format)" v-else-if="type === 'datetime'"></span>
    <div v-html="displayValue" v-else-if="type === 'html'"></div>
    <span v-text="displayValue" v-else></span>
  </div>
</template>

<script>
import util from "../util.js";
import dayjs from 'dayjs'

export default {
  props: {
    field: Object,
    value: {},
    name: String,
    model: Object
  },
  computed: {
    
    href(){
      return String(this.field.href).replace('{value}', this.displayValue)
    },
    type() {
      return this.field ? this.field.type : "text";
    },
    displayValue() {
      if (this.name && this.model) {
        return util.get(this.model, this.name);
      }
      return this.value;
    }
  },
  methods: {
    formatDateTime(date, format = 'YYYY-MM-DD HH:mm'){
      return dayjs(date).format(format)
    },
  }
};
</script>
