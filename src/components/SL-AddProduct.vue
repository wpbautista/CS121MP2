<template>
<body>
    <!--Add a button at the bottom for submission-->
    <h1 class="title">Add Product</h1>
    <section class="product-sec">
        <div class="img-upload-container">
            <input type="file" @change="updatepic" id="product-img" accept="image/*" hidden/>
            <label for="product-img" class="product-img-overlay">Upload Image</label>
            <img alt="" class="product-img-display" v-if="url" :src="url" />
        </div>
        <div class="product-details">
            <h1 class="product-name" contenteditable="true" data-placeholder="Product Name">Product Name</h1>
            <p class="product-desc" contenteditable="true" data-placeholder="Product Description">Product Description</p>
            <p class="product-price" contenteditable="true" data-placeholder="Product Price">Product Price</p>    
        </div>  
    </section>
    <span class="error" id="err_1">There are some error in the Product Name field.</span>
    <span class="error" id="err_2">There are some error in the Product Description field.</span>
    <span class="error" id="err_3">There are some error in the Product Price field.</span>
    <div class="btn-container">
        
        <button @click="addingprd" class="add-btn">Add Product</button>
    </div>
</body>  
</template>

<script>
export default{
    name: 'SL-AddProduct',
    data(){
        return{
            url: null,
        }
    },
    methods:{
        addingprd(){
            let productName = document.querySelector('.product-name');
            let productDesc = document.querySelector('.product-desc');
            let productPrice = document.querySelector('.product-price');

            var allFine = true;
            
            if(!productName.innerHTML.length || productName.innerHTML == productName.getAttribute('data-placeholder')){
                document.querySelector('#err_1').style.visibility = 'visible';
                allFine = false;
            }else{
                document.querySelector('#err_1').style.visibility = 'hidden';
            }
 
            if(!productDesc.innerHTML.length || productDesc.innerHTML == productDesc.getAttribute('data-placeholder')){
                document.querySelector('#err_2').style.visibility = 'visible';
                allFine = false;
            }else{
                document.querySelector('#err_2').style.visibility = 'hidden';
            }

            
            if(!productPrice.innerHTML.length || !Number(productPrice.innerHTML)){
                document.querySelector('#err_3').style.visibility = 'visible';
                allFine = false;
            }else{
                document.querySelector('#err_3').style.visibility = 'hidden';
            }

            if(allFine){
                alert('Success, should be submitting')
                //function to store the products, using json probably
                //then go back to dashboard
                this.$router.push({path : 'seller-dashboard'})
            }
        },
        updatepic(event){
            try{
                const file = event.target.files[0];
                this.url = URL.createObjectURL(file)
            }catch(error){
                console.log("")
            }
            
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

.product-sec{
    display: flex;
}

.product-img-display{
    background: white;
    width: 100%;
    height: 100%;

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
    margin: 10px;
}

*[contenteditable="true"]:focus{
    border: 2px solid #000000;
}

.btn-container{
    display: flex;
    justify-content: center;
}

.add-btn{
    width: 150px;
    height: 40px;
    outline: none;
    font-size: 0.9rem;
    font-family: 'Trebuchet MS', sans-serif;
    border: none;
    background: rgb(228, 205, 76);
    cursor: pointer;
}

.error{
    display: flex;
    justify-content: center;
    color: red;
    font-size: .9rem;
}

#err_1{
    visibility: hidden;
}

#err_2{
    visibility: hidden;
}

#err_3{
    visibility: hidden;
}
</style>