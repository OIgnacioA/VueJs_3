<template>

    <NuevaTarea/>

    
    <Ejercicio :Nombre="tarea.Nombre" :Id="tarea.Id" v-for="tarea in tareas" :key="tarea.Id" />
   
    <Boton/>


</template>
  
<script setup>
  import Ejercicio from './tareaView.vue';
  import NuevaTarea from './NuevaTareaView.vue';
  import Boton from './botonRecorridoView.vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const tareas = store.getters.getTarea;
</script>
  