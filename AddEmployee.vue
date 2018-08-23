<template>
  <div class="hello">
  <h2>This is our add employee form</h2>

  <div>

    <label> Name:
      <input type="text" v-model="employee.name" name="name" id ="name" class="k-textbox">
    </label>
  </div>
  <div>
      <label> Sales:
        <kendo-numerictextbox v-model.number="employee.sales" title="sales" :format="'c'" :min="0" :decimals="2">
        </kendo-numerictextbox>
    </label>
  </div>
  <div>
      <label> Date:
        <kendo-datepicker v-model="employee.birthdate"></kendo-datepicker>-
    </label>
  </div>
  <div>
      <label> State:
      <kendo-dropdownlist v-model="employee.country" 
                            :data-source="['', 'Hyderabad', 'Bangalore', 'Vizag', 'Pune']"
                            >
        </kendo-dropdownlist>
    </label>
  </div>
  <kendo-button @click="addhandler">ADD EMPLOYEE</kendo-button>
  </div>
</template>

<script>
import dataProvider from "./../dataProvider.js"

export default {
  name: 'AddEmployee',
  data (){
    return{
    employee:{}

    }
  },
  methods:{
    addhandler:function(){
      console.log("fd",this.employee);
      dataProvider.employees.push(this.employee);
      console.log("dataProvider.employees", dataProvider.employees);
      this.employee={};
      this.$router.push('/dashboard');

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
