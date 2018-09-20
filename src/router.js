import Vue from 'vue'
import Router from 'vue-router'

import FormBuilder from './views/FormBuilder.vue'
import DataTable from './views/DataTable.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/page/FormBuilder',
    },
    {
      path: '/page/FormBuilder',
      name: 'FormBuilder',
      component: FormBuilder
    },
    {
      path: '/page/DataTable',
      name: 'DataTable',
      component: DataTable
    },
  ]
})
