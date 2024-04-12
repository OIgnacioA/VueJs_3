<template>

    <NuevaTarea/>

    <div>
      <Ejercicio :Nombre="tarea.Nombre" :Id="tarea.Id" v-for="tarea in tareas" :key="tarea.Id" />
   
    </div>


</template>
  
<script setup>
  import Ejercicio from './tareaView.vue';
  import NuevaTarea from './NuevaTareaView.vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const tareas = store.getters.getTarea;
</script>
  