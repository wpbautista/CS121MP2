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
        <template v-for="item in products" :key="item.name">
            <SLProductCard :name="item.name" :source="item.source"/>
        </template>     
    </div>
</section>
</body>


</template>

<script>
//make product data get json from db 
//then pass it to product card 
//request happens on create
import SLProductCard from '@/components/SL-ProductCard.vue';
export default{
    name : 'SL-Dashboard',
    components:{
    SLProductCard
    },
    data(){
        return{
            products:[
                {
                    name: 'Lights',
                    source: 'suseller.jpg'
                },
                {
                    name: 'Camera',
                    source: 'suseller.jpg'
                },
                {
                    name: 'Jug',
                    source: 'suseller.jpg'
                },
                {
                    name: 'Radio',
                    source: 'suseller.jpg'
                },
                {
                    name: 'Laptop',
                    source: 'suseller.jpg'
                },

            ]
        }
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
    justify-content: center;
    gap: 20px;
}

</style>