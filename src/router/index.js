import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import('../views/Posts.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/accueil',
    name: 'accueil',
    component: () => import('../views/Accueil.vue'),
  },
  {
    path: '/velos',
    name: 'velos',
    component: () => import('../views/Velos.vue'),
  },
  {
    path: '/velos/:idVelos',
    name: 'detailsVelo',
    component: () => import('../views/detailsVelo.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
