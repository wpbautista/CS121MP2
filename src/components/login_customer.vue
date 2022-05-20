<template>
    <div class="center">
        <h1>Log-In</h1>
        <form @submit.prevent="submit">
            <div class="text_field">
                <input type="text" v-model="username" required>
                <label>Username</label>
            </div>
            <div class="text_field">
                <input type="password" v-model="password" autocomplete="on" required>
                <label>Password</label>
            </div>
            <button v-on:click="submit">Log-In!</button>
            <p>
                <router-link to="/sign-up">Create an Account</router-link>
            </p>
        </form>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: "login_customer",
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async submit() {
            let result = await axios.get(`http://localhost:3000/users?username=${this.username}&password=${this.password}`)
            console.warn(result)
            
            if(result.status==200 && result.data.length>0)
            {
                this.$router.push({name:'Home'})
                localStorage.setItem("user-information",JSON.stringify(result.data[0]))
                
            }
        }
        
    },
    mounted() {
        let user = localStorage.getItem("user-information");
        if (user) {
            this.$router.push({ name: "Home" })
        }
    }
}
</script>