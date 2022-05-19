<template>
<div class="product-card">
    <button class="btn edit-btn">&#9998;</button>
    <button class="btn delete-btn">&#x1F5D1;</button>
    <button class="btn open-btn">&#x1f441;</button>
    <!--current src is a placeholder-->
    <!--make src based on the uploaded image-->
    <img src="@/assets/suseller.jpg" alt="No Image" class="product-img"/>
    <p class="product-name">{{pname}}</p>
</div>
</template>

<script>
export default{
    name: 'ProductCard',
    props:{
        pname: String
    }
}
</script>

<style scoped>
.product-card{
    border: 15px solid #d5be8b;
    width: 100%;
    max-width: 300px;
    height: 300px;
    overflow: hidden;
    position: relative;
    background: #d5be8b;
}

.product-img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: .5s;
}

.product-name{
    position: absolute;
    color: white;
    text-transform: capitalize;
    font-family: 'Trebuchet MS', sans-serif;
    font-size: 25px;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: .5s;
}

.product-card:hover .product-name{
    opacity: 1;
}

.product-card:hover .product-img{
    opacity: 0.5;
}

.btn{
    position: absolute;
    z-index: 3;
    top: 10px;
    right: 10px;
    border: none;
    outline: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #d5be8b;
    color: white;
    font-size: 1.5rem;
    text-transform: capitalize;
    text-align: center;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: .5s;
}

.product-card:hover .btn{
    opacity: 1;
    pointer-events: all;
}

.edit-btn{
    top: 60px;
}

.delete-btn{
    top: 110px;
}
</style>