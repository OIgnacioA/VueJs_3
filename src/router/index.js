import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeViews.vue';
import AboutUs from '@/views/AboutUsViews.vue';

const routes = [
  { path: '/', component: Home },
   
   { path: '/about-us', component: AboutUsViews },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;