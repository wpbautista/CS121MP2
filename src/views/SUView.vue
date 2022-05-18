<template>
  <div class="container">
    <SUSeller msg="Apply for a Seller Account"/>
  </div>
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
</style>
