<template>
  <div>
    <b-table v-bind="attrs" class="data-table":items="items" :fields="fields">
      <template :slot="field.key || name" slot-scope="row"
      v-for="(field, name) in fields">
        <b-data-value :key="'data-value-' + name" :field="fields[name]"
        :name="field.key || name" :model="row.item" :value="row.value">
        </b-data-value>
      </template>
      <template slot="_actions" slot-scope="row">
        <b-button size="sm" @click.stop="edit(row.item)" class="mr-1" v-if="noEdit !== true">
          <i class="fa fa-edit"></i> Edit
        </b-button>
        <b-button size="sm" @click.stop="remove(row.item)" v-if="noRemove !== true">
          <i class="fa fa-trash"></i> Delete
        </b-button>
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
    attrs: Object,
    page: Number,
    total: Number,
    totalRows: Number,
    perPage: Number,
    noEdit: Boolean,
    noRemove: Boolean,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    edit(row){
      this.$emit('edit', row)
    },
    remove(row){
      this.$emit('remove', row)
    },
  }
};
</script>

<style>
.data-table td {
  vertical-align: middle;
}
</style>
