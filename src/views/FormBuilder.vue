<template>
  <div>
    <b-row>
      <b-col>
        <BFormBuilder :fields="fields" v-model="model"></BFormBuilder>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
      fields: {
        title: { label: "Blog Title", cols: 12 },

        category_id: {
          label: "Category",
          type: "select",
          cols: 6,
          options: [
            { text: "HTML+CSS", value: 1 },
            { text: "Vue.js", value: 2 },
            { text: "Node.js", value: 3 }
          ]
        },
        
        cover: { type: "file", cols: 6 },
        description: { type: "textarea", rows: 3, placeholder: "Some text..." },
        body: { type: "html" }
      },
      model: {
        title: "Give me an awesome title",
        category_id: 3,
        body: `
            <h3>Travel to somewhere</h3>
            <p>Ready?</p>
          `
      }
    };
  },
  methods: {

  }
};
</script>