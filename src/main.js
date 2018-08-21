// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App1 from './App'
// import '@progress/kendo-ui'
// import '@progress/kendo-theme-default/dist/all.css'
// import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'

//Vue.use(GridInstaller)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App1 },
    template: '<App1/>'
  })
  