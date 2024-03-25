<template>
  <div class="container">
    <h2>Salario Relativo</h2>
    <p v-if="salarioRelativo !== null"> {{ salarioRelativo }}</p>
    <p v-else>No se ha seleccionado ninguna profesión o no se encontró el salario relativo.</p>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue';
import { useStore } from 'vuex';

const dataStore = useStore();

// Usamos una computada para obtener el salario relativo desde el store
const salarioRelativo = computed(() => {
  return dataStore.getters.getSalarioRelativo;
});

// Observar cambios en la profesión seleccionada en el store
watch(() => dataStore.state.selectedProfesion, (profesionSeleccionada) => {
  if (profesionSeleccionada) {
    dataStore.dispatch('fetchSalarioRelativo', profesionSeleccionada);//
  }
});
</script>


<style scoped lang="scss">
  @import '@/assets/scss/estilos.modules.scss';
</style>
