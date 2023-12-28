import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router'; // Ajustar la ruta según tu estructura
import { createPinia } from 'pinia';

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app');