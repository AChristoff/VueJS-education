import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import Register from '@/views/auth/Register';
import Login from '@/views/auth/Login';
import allMovies from '@/views/mov/MoviesAll';


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
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/movie/all',
        name: 'allMovies',
        component: allMovies,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
