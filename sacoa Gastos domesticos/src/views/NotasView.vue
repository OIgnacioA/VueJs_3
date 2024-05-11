<template>
  <div class="container">
    <label for="nombre">Datos Adicionales:</label>
    <textarea id="mensaje" name="mensaje" rows="4" cols="50" v-model="datosAdicionales"></textarea>
  <br><br>
  <button @click="upLoad()">Cargar Datos</button><br><br>
</div>
</template>

<script setup>
import { useStore } from 'vuex';
import { ref } from 'vue';

const store = useStore();
let datosAdicionales = ref('');


const upLoad = () => {
  
  store.dispatch('AddNotas', datosAdicionales.value); 
  store.dispatch('GenerarJson'); 


  datosAdicionales.value = "";
} 

</script>




<style scoped lang="scss">
@import '@/assets/scss/estilo.notas.scss';
</style>