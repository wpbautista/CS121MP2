<template>
<body>
    <h1 class="title">Add Product</h1>
    <section class="product-sec">
        <div class="img-upload-container">
            <input type="file" @change="addingprd" id="product-img" hidden/>
            <label for="product-img" class="product-img-overlay">Upload Image</label>
            <img alt="" class="product-img-display" />
        </div>
        <div class="product-details">
            <h1 class="product-name" contenteditable="true" data-placeholder="Product Name">Product Name</h1>
            <p class="product-desc" contenteditable="true" data-placeholder="Product Description">A description of the product</p>
            <p class="product-price" contenteditable="true" data-placeholder="Product Price">Price</p>
        </div>
    </section>
    <section class="detailed-details">
        
    </section>
</body>  
</template>

<script>
export default{
    name: 'SL-AddProduct',
    methods:{
        addingprd(){
            alert('lol')
        }
    }
}
</script>

<style scoped>
body{
    padding: 50px 0;
}

div{
    border: 1px red solid;
}
.title{
    text-align: center;
    font-size: 3rem;
    font-weight: 100;
    margin-bottom: 10px;
    line-height: 3rem;
    opacity: 0.5;
}

.product-sec{
    display: flex;
}

.prodct-img-display{
    background: white;
    width: 100%;
}

.img-upload-container{
    width: 50%;
    position: relative;
    height: 600px;
    flex: 1;
    margin: 10px;
}

.product-img-overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2rem;
    opacity: 0;
    transition: .5s;
}

.product-img-overlay:hover{
    opacity: 100%;
}

.product-details{
    width: 50%;
    max-width: 50%;
    flex: 1;
    height: 600px;
    margin: 10px;
}

*[contenteditable="true"]{
    outline: none;
    border: 2px solid #cacaca;
    padding: 10px;
    margin-bottom: 5px;
}

*[contenteditable="true"]:focus{
    border: 2px solid #000000;
}
</style>