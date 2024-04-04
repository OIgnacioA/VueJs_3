<template>
    <div class="container">
      <h4>Respuesta del cálculo:</h4>
      <p v-if="resultado !== null">{{ resultado }}</p>
      <button @click="realizarCalculo">Calcular</button>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  import { ref } from 'vue';
  
  const store = useStore();
  
  // Crear una referencia a resultado
  const resultado = ref(null);
  
  const realizarCalculo = async () => {
    resultado.value = await store.dispatch('realizarCalculo');
    console.log(resultado.value);
    // Forzar la actualización de la vista manualmente
    forceUpdate();
  };
  
  // Función para forzar la actualización de la vista
  const forceUpdate = () => {
    try {
      this.$forceUpdate();
    } catch (error) {
      console.error("Error al forzar la actualización de la vista:", error);
    }
  };
  </script>
  
  <style scoped lang="scss">
  @import '@/assets/scss/estilos.modules.scss';
  </style>
  