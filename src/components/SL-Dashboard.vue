<template>
<body>
<div class="add-product"> 
    <p class="text">Your Product List</p> 
    <a @click="addproduct" class="add-product-btn">add product</a>
</div>
<section class="seller-products">
    <div class="product-container">
        <!--the product cards are here-->
        <!-- fetch the product first then use productcard
        component, and img src should be a variable here
        -->
        <!--remove this later-->
        <SLProductCard pname="Lights"/>
        <SLProductCard pname="Bed"/>
        <SLProductCard pname="Cup"/>
    </div>
</section>
</body>


</template>

<script>
import SLProductCard from '@/components/SL-ProductCard.vue';
export default{
    name : 'SL-Dashboard',
    components:{
    SLProductCard
},
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

body{
    padding: 20px 5vw;
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

.seller-products{
    margin-top: 30px;
}

.product-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 20px;
}

</style>