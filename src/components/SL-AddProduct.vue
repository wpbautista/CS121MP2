<template>
<body>
    <h1 class="title">Add Product</h1>
    <section class="product-sec">
        <div class="img-upload-container">
            
            <input type="file" @change="addingprd" id="product-img" hidden/>
            <label for="product-img" class="product-img-overlay">Upload Image</label>
            <img alt="" class="product-img-display" />
        </div>
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

.title{
    text-align: center;
    font-size: 3rem;
    font-weight: 100;
    margin-bottom: 10px;
    line-height: 3rem;
    opacity: 0.5;
}

.prodct-img-display{
    background: white;
    width: 100%;
}

.img-upload-container{
    width: 60%;
    position: relative;
    height: 600px;
}

.product-img-overlay{
    margin-left: 40px;
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
</style>