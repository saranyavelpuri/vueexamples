import Vue from 'vue'
import Router from 'vue-router'
import New from '@/components/New'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/grid',
      name: 'News',
      component: New
    }
  ]
})
