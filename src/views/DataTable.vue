<template>
  <div>
    <b-data-table 
    
    :items="items" :fields="fields" :total="total" :per-page="perPage"
    :page.sync="page" @edit="edit" @remove="remove">

      <div slot="summary" slot-scope="data">
        总计: {{data.total}}条数据
      </div>
    </b-data-table>
    
  </div>
</template>

<script>
import items from "../items.json";

export default {
  data() {
    return {
      rawItems: items,
      fields: {
        id: {},
        actor_name: { key: "actor.display_login", label: "Actor Name" },
        "actor.avatar_url": { type: "image", attrs: { height: "50" } },
        repo: {
          key: "repo.name",
          type: "link",
          href: "https://github.com/{value}"
        },
        public: {
          type: "switch"
        },
        created_at: { type: "datetime", format: "MM-DD HH:mm" },
        _actions: {},
      },
      items: [],
      total: 0,
      perPage: 10,
      page: 0
    };
  },
  watch: {
    page(page) {
      const start = (page - 1) * this.perPage;
      this.items = items.slice(start, start + this.perPage);
    }
  },
  methods: {
    login(data) {
      console.log(data);
    },
    edit(row){
      console.log('edit', row)
    },
    remove(row){
      console.log('remove', row)
    }
  },
  mounted() {
    this.page = 1;
    this.total = items.length;
  }
};
</script>

<style lang="scss">
.components {
  .card {
    margin-top: 1rem;
  }
}
</style>