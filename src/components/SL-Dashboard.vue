<template>
<body>
<div class="add-product"> 
    <p class="text">Your Product List</p> 
    <a @click="addproduct" class="add-product-btn">add product</a>
</div>
</body>


</template>

<script>
export default{
    name : 'SL-Dashboard',
    methods:{
        addproduct(){
            this.$router.push({path : 'seller-add-product'})
        }
    }
}
</script>

<style scoped>
*{
    box-sizing: border-box;
}

.add-product{
   width: 100%;
   height: 60px;
   background: #ffffff;
   border-radius: 10px;
   
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 4px;
}

.text{
    font-size: 1.2rem;
}

.add-product-btn{
    font-family: 'Trebuchet MS', sans-serif;
    text-decoration: none;
    color: black;
    background: rgb(228, 205, 76);
    text-transform: capitalize;
    padding: 10px 20px;
    border-radius: 5px;
}

</style>