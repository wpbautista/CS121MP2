<template>
  <SLDashboard/>
</template>

<script>
// @ is an alias to /src
import SLDashboard from '@/components/SL-Dashboard.vue'

export default {
  name: 'SLDView',
  components: {
    SLDashboard
}
}
</script>

<style>
body{
    background: #e9e9e9;
    padding: 20px 5vw;
    font-family: 'Trebuchet MS', sans-serif;
}
</style>
