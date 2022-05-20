<template>
 <signup_customer />
</template>

<script>
import signup_customer from './components/signup_customer.vue'
export default{
  name: 'App',
  components : {
    signup_customer
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
