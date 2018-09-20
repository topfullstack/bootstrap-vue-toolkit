<template>
  <img class="data-value" v-bind="field.attrs" :src="displayValue" alt="" v-if="type === 'image'">
  <video class="data-value" v-bind="field.attrs" :src="displayValue" alt="" v-else-if="type === 'video'"></video>
  <audio class="data-value" v-bind="field.attrs" :src="displayValue" alt="" v-else-if="type === 'audio'"></audio>
  <a class="data-value" v-bind="field.attrs" :href="href" v-else-if="type === 'link'">{{displayValue}}</a>
  <span class="data-value badge" v-bind="field.attrs" :class="'badge-' + (displayValue ? 'success' : 'danger')" v-else-if="type === 'switch'">{{displayValue}}</span>
  <span class="data-value" v-bind="field.attrs" v-text="formatDateTime(displayValue, field.format)" v-else-if="type === 'datetime'"></span>
  <div class="data-value" v-bind="field.attrs" v-html="displayValue" v-else-if="type === 'html'"></div>
  <span class="data-value" v-bind="field.attrs" v-text="displayValue" v-else></span>
</template>

<script>
import util from "../util.js";
import dayjs from "dayjs";

export default {
  props: {
    field: Object,
    value: {},
    name: String,
    model: Object
  },
  computed: {
    href() {
      return String(this.field.href).replace("{value}", this.displayValue);
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
    formatDateTime(date, format = "YYYY-MM-DD HH:mm") {
      return dayjs(date).format(format);
    }
  }
};
</script>
