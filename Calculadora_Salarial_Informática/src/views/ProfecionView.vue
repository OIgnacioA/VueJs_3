<template>
  <div class="container">
    <h2>Profesiones</h2>

    <select v-model="selectedProfession" @change="handleProfessionChange">
      <option value="" selected disabled hidden>Selecciona una profesión</option>
      <option v-for="(profesion, index) in profesiones" :key="index" :value="profesion">
        {{ profesion.nombre }}
      </option>
    </select>
    <p v-if="selectedProfession">{{ selectedProfession.descripcion }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

const dataStore = useStore();
const profesiones = ref([]);
const selectedProfession = ref(null);

const handleProfessionChange = () => {
  if (selectedProfession.value) {
    dataStore.commit('setSelectedProfesion', selectedProfession.value);
  }
};


onMounted(async () => {
  try {
    await dataStore.dispatch('fetchData');
    profesiones.value = dataStore.getters.getProfesiones || [];
  } catch (error) {
    console.error('Error al cargar datos:', error);
  }
});




</script>

<style scoped lang="scss">
  @import '@/assets/scss/estilos.modules.scss';
</style>