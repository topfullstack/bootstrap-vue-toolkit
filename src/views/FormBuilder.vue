<template>
  <div>
    <h1>Bootstrap Vue Toolkit Demo</h1>
    <b-row class="components">
      <b-col md="6" lg="4">
        <b-card header="FormBuilder - Login">
          <BFormBuilder v-bind="loginForm" @submit="login"></BFormBuilder>
        </b-card>
      </b-col>
      <b-col md="6" lg="4">
        <b-card header="FormBuilder - Search">
          <BFormBuilder v-bind="searchForm"></BFormBuilder>
        </b-card>
      </b-col>
      <b-col md="6" lg="4">
        <b-card header="FormBuilder - Edit">
          <BFormBuilder v-bind="editForm"></BFormBuilder>
        </b-card>
      </b-col>
      
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        action: "login",
        method: "post",
        value: {
          password: 'demo'
        },
        fields: {
          username: {
            type: "text",
            label: "Username",
            placeholder: "Your username",
            description: "Username or mobile."
          },
          password: { type: "password" }
        },
        submitText: "Login",
        backText: false
      },
      searchForm: {
        inline: true,
        submitText: "Search",
        backText: false,
        fields: {
          keyword: {}
        },
        value: {
          keyword: 'Bootstrap Vue'
        },
      },
      editForm: {
        fields: {
          title: { label: "Blog Title" },
          cover: { type: 'file' },
          category_id: {
            label: "Category",
            type: "select",
            options: [
              { text: "HTML+CSS", value: 1 },
              { text: "Vue.js", value: 2 },
              { text: "Node.js", value: 3 }
            ]
          },
          description: { type: "textarea", rows: 3, placeholder: 'Some text...' },
          body: { type: "html" }
        },
        value: {
          title: 'Give me an awesome title',
          category_id: 3,
          body: `
            <h3>Travel to somewhere</h3>
            <p>Ready?</p>
          `,
        },
      }
    };
  },
  methods: {
    login(data){
      console.log(data)
    }
  },
};
</script>

<style lang="scss">
.components {
  .card {
    margin-top: 1rem;
  }
}
</style>