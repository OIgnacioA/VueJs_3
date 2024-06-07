<template>
    <div>
      <form @submit.prevent="submitForm">
        <label for="progressInput">Progress:</label>
        <input type="number" id="progressInput" v-model="progress" min="0" max="100" />
        <button type="submit" >Submit</button>
      </form>
      <progress-bar :progress="progress"></progress-bar>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ProgressBar from './ProgressBar.vue';
  import { useStore } from 'vuex';


  
  const progress = ref(0);
  const store = useStore(); 



  const submitForm = () => {

    alert(`Progress submitted: ${progress.value}%`);
    let Contenido = {ValorBarra : progress.value};
    store.dispatch('cargarDato', Contenido)

  };
  </script>
  
  <style scoped>
  /* Puedes agregar estilos adicionales aquí si es necesario */
  </style>
  