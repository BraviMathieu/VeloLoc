import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: () => import('../views/Accueil.vue'),
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import('../views/Posts.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/modify',
    name: 'modify',
    component: () => import('../views/Modify.vue'),
  },

  {
    path: '/velos',
    name: 'velos',
    component: () => import('../views/Velos.vue'),
  },
  {
    path: '/velos/:idVelos',
    name: 'detailsVelo',
    component: () => import('../views/DetailsVelo.vue'),
  },
  {
    path: '/paiements',
    name: 'paiements',
    component: () => import('../views/Paiements.vue'),
  },
  {
    path: '/panier',
    name: 'panier',
    component: () => import('../views/Panier.vue'),
  },
  {
    path: '/payer',
    name: 'payer',
    component: () => import('../views/Payer.vue'),
  },
  {
    path: '/paiementreussi',
    name: 'paiementreussi',
    component: () => import('../views/PaiementReussi.vue'),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
