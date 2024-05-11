<template>
    <div class="container">
      <p v-if="resultado !== null">{{ resultado }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const resultado = ref(null);
  
  onMounted(() => {
    resultado.value = store.state.originalInicial;
  });
  </script>
  
  <style scoped lang="scss">
  @import '@/assets/scss/estilos.modules.scss';
  </style>
  