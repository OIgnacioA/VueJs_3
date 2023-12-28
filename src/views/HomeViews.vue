<template>
  <div>
    <h1>{{ greeting }}</h1>
    <button @click="incrementCounter">Incrementar Contador</button>
    <p>Contador: {{ counter }}</p>
    <!-- Botón para navegar a AboutUsViews.vue -->
    <router-link to="/about-us">Ir a Acerca de Nosotros</router-link>
    <!-- O utiliza un botón para la navegación -->
    <button @click="navigateToAboutUs">Ir a Acerca de Nosotros</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Importa el hook useRouter

const greeting = ref('Hola Mundo');
const counter = ref(0);
const router = useRouter(); // Inicializa el router

const incrementCounter = () => {
  counter.value += 1;
};

const navigateToAboutUs = () => {
  router.push('/about-us'); // Utiliza el método push para navegar a la ruta /about-us
};
</script>