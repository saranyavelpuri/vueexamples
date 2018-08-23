// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'
import{ DataSource, DataSourceInstaller} from '@progress/kendo-datasource-vue-wrapper'
import { Chart,ChartInstaller } from '@progress/kendo-charts-vue-wrapper'
import { Button,ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'
import { NumericTextBox, InputsInstaller } from '@progress/kendo-inputs-vue-wrapper'
import { DropDownList, DropdownsInstaller } from '@progress/kendo-dropdowns-vue-wrapper'
import { DatePicker,DateinputsInstaller } from '@progress/kendo-dateinputs-vue-wrapper'
Vue.use(DateinputsInstaller)
Vue.use(InputsInstaller)
Vue.use(ButtonsInstaller)
Vue.use(ChartInstaller)
Vue.use(DropdownsInstaller)
Vue.use(GridInstaller)
Vue.use(DataSourceInstaller)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
