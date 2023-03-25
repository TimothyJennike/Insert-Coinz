import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')    
  },
  {
    path: '/user/:id/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue'),
    props: true
  },
  {
    path: '/register',
    name: 'register',
    component: ()=> import('../views/RegisterView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: ()=> import('../views/AdminView.vue')
  },
  {
    path: '/single.product/:id',
    name: 'single.product',
    component: ()=> import('../views/SingleProductView.vue'),
    props: true
  },
  {
    path: '/userprofile/:id',
    name: 'userprofile',
    component: ()=> import('../views/UserProfileView.vue'),
    props: true
  },
  {
    path: '/user/:id/checkout',
    name: 'checkout',
    component: ()=> import('../views/CheckoutView.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
