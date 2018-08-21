<template>
  <div id="grid" class="grid">
 <kendo-grid :height="600"
                :data-source="localDataSource"
                :editable="'inline'"
                :page-size='5'
                >
        <kendo-grid-column field="ProductName"></kendo-grid-column>
        <kendo-grid-column field="UnitPrice" title="Unit Price" :width="120" :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column field="UnitsInStock" title="Units In Stock" :width="120"></kendo-grid-column>
        <kendo-grid-column field="Discontinued" :width="120"></kendo-grid-column>
        <kendo-grid-column  :command="[{name: 'edit', click: editFnc}, 'destroy']" title="&nbsp;" width="250px"></kendo-grid-column>
    </kendo-grid>
</div>
</template>

<script>
import Vue from "vue";
import $ from "jQuery";
import "@progress/kendo-ui";
import "@progress/kendo-theme-default/dist/all.css";
import {
  Grid,
  GridColumn,
  GridInstaller
} from "@progress/kendo-grid-vue-wrapper";

/* eslint-disable no-new */
Vue.use(GridInstaller);
export default {
  name: "New",
  data() {
    return {
      localDataSource: [
        {
          ProductID: 1,
          ProductName: "Chai",
          UnitPrice: 18,
          UnitsInStock: 39,
          Discontinued: false
        },
        {
          ProductID: 2,
          ProductName: "Chang",
          UnitPrice: 17,
          UnitsInStock: 40,
          Discontinued: false
        },
        {
          ProductID: 3,
          ProductName: "Aniseed Syrup",
          UnitPrice: 10,
          UnitsInStock: 13,
          Discontinued: false
        },
        {
          ProductID: 4,
          ProductName: "Chef Anton's Cajun Seasoning",
          UnitPrice: 22,
          UnitsInStock: 53,
          Discontinued: false
        },
        {
          ProductID: 5,
          ProductName: "Chef Anton's Gumbo Mix",
          UnitPrice: 21.35,
          UnitsInStock: 0,
          Discontinued: true
        },
        {
          ProductID: 6,
          ProductName: "Grandma's Boysenberry Spread",
          UnitPrice: 25,
          UnitsInStock: 120,
          Discontinued: false
        },
        {
          ProductID: 7,
          ProductName: "Uncle Bob's Organic Dried Pears",
          UnitPrice: 30,
          UnitsInStock: 15,
          Discontinued: false
        }
      ]
    };
  },
  methods: {
    editFnc(e) {
      var tr = $(e.target).closest("tr"); // get the current table row (tr)
      console.log(tr);
 }
   
  }
};
</script>