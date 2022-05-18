<template>
  <SUSeller msg="Apply for a Seller Account"/>
</template>

<script>
// @ is an alias to /src
import SUSeller from '@/components/SU-Seller.vue'

export default {
  name: 'SUView',
  components: {
    SUSeller
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
    background: #e9e9e9;
    font-family: 'Trebuchet MS', sans-serif;
}
</style>
