<template>
  <div>
    <b-data-table :attrs="attrs" 
    :items="items" :fields="fields" :total="total" :per-page="perPage"
    :page.sync="page" @edit="edit" @remove="remove">
    </b-data-table>
    
  </div>
</template>

<script>
import items from "../items.json";

export default {
  data() {
    return {
      rawItems: items,
      attrs: {
        // bordered: true,
        hover: true,
      },
      fields: {
        // id: {},
        actor_name: {
          key: "actor.display_login",
          label: "Actor Name",
          attrs: { style: "max-width: 5em" }
        },
        "actor.avatar_url": {
          label: "Avatar",
          type: "image",
          attrs: { height: "50" }
        },
        repo: {
          key: "repo.name",
          type: "link",
          href: "https://github.com/{value}",
          attrs: { style: "max-width: 10em" }
        },
        public: {
          type: "switch"
        },
        created_at: { type: "datetime", format: "MM-DD HH:mm" },
        _actions: {}
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
    edit(row) {
      this.$router.push('/page/FormBuilder')
      console.log("edit", row);
    },
    remove(row) {
      if (confirm('Are you sure to delete this record?')) {
        const i = this.items.findIndex(v => v.id === row.id)
        this.items.splice(i, 1)
      }
      console.log("remove", row);
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