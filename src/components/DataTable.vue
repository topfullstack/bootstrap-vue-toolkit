<template>
  <div>
    <b-table :items="items" :fields="fields">
      <template :slot="field.key || name" slot-scope="row"
      v-for="(field, name) in fields">
        <b-data-value :key="'data-value-' + name" :field="fields[name]"
        :name="field.key || name" :model="row.item" :value="row.value">
        </b-data-value>
      </template>
    </b-table>

    <b-row class="align-items-center">
      <b-col>
        <b-pagination :total-rows="totalRows || total" :per-page="perPage"
        :value="page" @input="$emit('update:page', arguments[0])">
        </b-pagination>
      </b-col>
      <b-col class="text-right">
        <slot name="summary" :total="total" :page="page" :per-page="perPage">
          Total: {{total}}
        </slot>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    fields: Object,
    page: Number,
    total: Number,
    totalRows: Number,
    perPage: Number
  },
  data() {
    return {};
  },
  computed: {}
};
</script>

