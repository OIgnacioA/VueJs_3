<template>

  <label>Nombre:</label>
  <input type="text" v-model="tareaNueva">
  <button @click="AgregarTarea()" >Agregar!!</button><br>
  
  
</template>
  

<script setup>

  import {ref} from 'vue';
  import { useStore } from 'vuex';
 
  
  
  let tareaNueva = ref('');
  let contador = ref('');
  let store = useStore();
  
  
  const AgregarTarea = () => {
  
    contador.value++;
    let NuevaT = {Nombre : tareaNueva.value, Id : contador.value}; 
   
    store.dispatch('agregarNueva', NuevaT);

  }
  
  
  
  </script>