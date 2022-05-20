<template>
<h1>Welcome!</h1>
</template>
<script>
export default{
    /* eslint-disable */
    name: 'Home',
    mounted(){
        let user = localStorage.getItem("user-information");
        if(!user){
            this.$router.push({name:"signup_customer"})
        }
    }
}
</script>