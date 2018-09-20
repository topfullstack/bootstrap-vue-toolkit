<template>
  <b-form v-bind="$props" @submit.prevent="$emit('submit', value)">
    <template v-if="!inline">
      <b-row>
        <b-col v-for="(field, name) in fields" :key="name" :lg="field.lg || field.cols || 12">
          <b-form-group  v-bind="field"
          :label="field.label || util.titlize(name)">
            <BFormField :name="name" :field="field" v-model="model[name]" />
          </b-form-group>
        </b-col>
      </b-row>
    </template>
    <template v-else>
      <template v-for="(field, name) in fields" v-bind="field">
        <label for="" :key="`label-${name}`" >{{field.label}}</label>
        <BFormField :key="`input-${name}`" :name="name" :field="field" v-model="model[name]" />
      </template>
    </template>
    <b-button type="submit" variant="primary">{{submitText}}</b-button>
    <b-button type="button" v-if="backText" @click="$router.go(-1)">{{backText}}</b-button>
  </b-form>
</template>

<script>
import util from '../util.js'

export default {
  props: {
    action: String,
    method: String,
    submitText: {
      default: 'Submit'
    },
    backText: {
      default: 'Back'
    },
    fields: {},
    inline: Boolean,
    value: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    util(){
      return util
    },
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  }
};
</script>


