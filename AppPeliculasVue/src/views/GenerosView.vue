<template>
    <div>
      <div v-for="(imagen, index) in img" :key="index">
        <GeneroLink :imagen="imagen" />
      </div>
    </div>
  </template>
  
  <script setup>
  import GeneroLink from '../components/generoLink.vue'
  import { ref } from 'vue';
  
  const img = ref(['Drama', 'Comedia', 'Accion', 'Ciencia_Ficcion', 'Terror','Romance' ]);
  </script>


  
  
  