<template>
    <div style="display: flex; flex-wrap: wrap;">
      <input type="text" v-model="nombreTemp">
      <p>{{ nombre }}</p>
      <p>{{ id }}</p>
      <button @click="modificarTarea(id, nombreTemp)">Modificar</button>
      <button @click="borrar(id)">Borrar</button>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  import { ref, defineProps } from 'vue';
  
  const store = useStore();
  
 const props = defineProps({
    Nombre: String,
    Id: Number
  });
  
  const nombreTemp = ref(props.Nombre); // Inicializar con el valor de la prop
  
  const modificarTarea = (id, nuevoNombre) => {
    store.dispatch('Modificacion', { id, Nombre: nuevoNombre });
  }
  
  // const borrar = (id) => {
  //   // Lógica para borrar la tarea
  // }
  </script>
  