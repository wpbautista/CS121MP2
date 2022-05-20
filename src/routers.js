import Home from "./components/Home.vue"
import signup_customer from "./components/signup_customer.vue"
import { createRouter, createWebHistory } from "vue-router"
import login_customer from "./components/login_customer.vue"
const routes = [
    {
        name: "Home",
        component: Home,
        path: "/"
    },
    {
        name: "signup_customer",
        component: signup_customer,
        path: "/sign-up"
    },
    {
        name: "login_customer",
        component: login_customer,
        path: "/log-in"
    },
];

const router = createRouter({ history: createWebHistory(), routes })

export default router