import { createRouter, createWebHistory } from 'vue-router';
import DramaView from '../views/DramaView.vue';
import AccionView from '../views/AccionView.vue';
import CienciaFiccionView from '../views/CienciaFiccionView.vue';
import ComediaView from '../views/ComediaView.vue';
import RomanceView from '../views/RomanceView.vue';
import TerrorView from '../views/TerrorView.vue';
import AboutView from '../views/AboutView.vue';
import GenerosView from '../views/GenerosView.vue';


const routes = [

 {
  path: '/',
  name: 'generos',
  component: GenerosView,
 },
  {
    path: '/Drama',
    name: 'Drama',
    component: DramaView,
  },
  {
    path: '/Accion',
    name: 'Accion',
    component: AccionView,
   },
  {
    path: '/About',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/Ciencia_Ficcion',
    name: 'Ciencia_Ficcion',
    component: CienciaFiccionView,
  },
  {
    path: '/Terror',
    name: 'Terror',
    component: TerrorView,
  },
  {
    path: '/Comedia',
    name: 'Coemdia',
    component: ComediaView,
  },
  {
    path: '/Romance',
    name: 'Romance',
    component: RomanceView,
  }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
