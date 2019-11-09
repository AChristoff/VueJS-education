import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/home/Home';
import Register from '@/components/auth/Register';
import Login from '@/components/auth/Login';


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: 'login',
        name: 'Login',
        component: Login,
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
