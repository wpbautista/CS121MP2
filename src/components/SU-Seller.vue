<template>
<body>
  <!--This seller signup form is for non sellers only.
      If the user is already a seller, the user should
      be redirected to the dashboard.-->
  <!--Change page Title-->
  <div class="seller-form">
      <h1 class="sf-title">{{ msg }}</h1>
      <input type="text" autocomplete="off" id="business-name" placeholder="Business Name"/>
      <textarea id="business-address" autocomplete="off" placeholder="Business Address"></textarea>
      <textarea id="business-description" autocomplete="off" placeholder="Describe your Business"></textarea>
      <input type="number" id="business-contactno" autocomplete="off" placeholder="Business Contact Number"/>
      <span class="error">All fields must be filled.</span>
      <button @click="submitCLick" class="apply-btn">start your seller account</button>
  </div>
  <img src="@/assets/suseller.jpg" class="seller-img" alt="" />
</body>
</template>

<script>
export default {
  name: 'SU-Seller',
  props: {
    msg: String
  },
  methods:{
    submitCLick(){
      //holds info
      let businessName = document.querySelector('#business-name').value;
      let businessAddress = document.querySelector('#business-address').value;
      let businessDescription = document.querySelector('#business-description').value;
      let businessContactno = document.querySelector('#business-contactno').value;

      if(!businessName.length || !businessAddress || !businessDescription ||
      businessContactno.length < 10 || !Number(businessContactno)){
        document.querySelector('.error').style.visibility = 'visible';
      }
      else{
        alert('Success. Should be submitting now'); //remove after development
        this.$router.push({path : 'seller-dashboard'}) //to dashboard
        //some method to send data
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
    -moz-appearance: textfield;
}

body{
  width: 100%;
  height: 100vh;
  display: flex;
  background: #e9e9e9;
  font-family: 'Trebuchet MS', sans-serif;
}

.seller-img{
  width: 40%;
  height: 100%;
  object-fit: cover;
}

.seller-form{
  width: 60%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sf-title{
  font-size: 1.8rem;
  text-transform: capitalize;
}

input, textarea{
  width: 70%;
  border: 1px solid black;
  border-radius: 5px;
  height: 1.2rem;
  font-size: .9rem;
  line-height: 1.5rem;
  padding: 10px;
  margin: 10px;
}

textarea{
  height: 8rem;
  font-family: 'Trebuchet MS', sans-serif;
  resize: none;
  outline: none;
}

.apply-btn{
  width: 250px;
  padding: 10px 0;
  font-size: .9rem;
  text-transform: capitalize;
  background: rgb(228, 205, 76);
  border: none;

  margin-top: 20px;
  cursor: pointer;
}

.error{
  color: red;
  font-size: .7rem;
  visibility: hidden;
}
</style>
