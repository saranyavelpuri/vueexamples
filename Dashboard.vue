<template>
  <div id="hello">
    <h1>{{ msg }}</h1>

<kendo-datasource :data="employees" ref="local" :schema-model-fields="schemaFields">
</kendo-datasource>

<kendo-grid :id="'form'" :data-source-ref="'local'" :sortable="true" :filterable="true" :editable="'inline'">

  <kendo-grid-column field="name" title="Employee"></kendo-grid-column>
    <kendo-grid-column field="sales" title="Sales" type="number" :format="'{0:c}'"></kendo-grid-column>
  <kendo-grid-column field="birthdate" title="Birthdate"  type="date" :format="'{0:MM-dd-yyyy}'"></kendo-grid-column>
  <kendo-grid-column field="country" title="Country"></kendo-grid-column>
 <kendo-grid-column  :id="'fde'" :command="[{name: 'edit', click: editFnc}, {name: 'destroy', click: deleteFnc}]" title="&nbsp;" width="250px"></kendo-grid-column>
</kendo-grid>


<kendo-chart :title-text="'Employee Sales'" :data-source-ref="'local'"
:category-axis-fields="'name'" :series="series">
</kendo-chart>
  </div>
</template>

<script>
import dataProvider from "./../dataProvider.js"
import $ from "jQuery";

export default {
  name: 'Dashboard',
  data () {
    return {
      msg: 'Welcome to our Dashboard',
      employees:dataProvider.employees,
      schemaFields:{
        name:{ type: "string", title : "Employee Name"},
        sales:{ type: "number", title : "Sales"},
         birthdate:{ type: "date", title : "Employee Birthdate"},
        country:{ type: "string", title : "Country"}
      },
      series:[
        {field: "sales",
         name: "sales in unit"
        }
        
      ]
    }
  },
    methods:{
             editFnc : function(e){
                var grid = $("#app").data("kendoGrid");
                console.log(grid,"grid");    

             },
             deleteFnc: function()
{

}


    }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
