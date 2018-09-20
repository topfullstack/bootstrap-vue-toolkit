import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FormBuilder from './views/FormBuilder.vue'
import DataTable from './views/DataTable.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/form-builder',
      name: 'form-builder',
      component: FormBuilder
    },
    {
      path: '/data-table',
      name: 'data-table',
      component: DataTable
    },
  ]
})
