import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import AddEmployee from '@/components/AddEmployee'

Vue.use(Router)//use to install  plugin

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/addEmployee',
      name: 'AddEmployee',
      component: AddEmployee
    }
  ]
})
