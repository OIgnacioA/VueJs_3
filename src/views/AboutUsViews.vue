<template>
  <div>
    <label for="selectType">Selecciona el tipo:</label>
    <select id="selectType" v-model="selectedType" @change="onChangeType">
      <option value="" disabled selected>Desplegar opciones</option>
      <option value="pais">País</option>
      <option value="ciudad">Ciudad</option>
      <option value="provincia">Provincia/Estado</option>
    </select>
<br>
    <label v-if="selectedType === 'pais'" for="selectData">Selecciona el país:</label>
    <label v-else-if="selectedType === 'ciudad'" for="selectData">Selecciona la ciudad:</label>
    <label v-else-if="selectedType === 'provincia'" for="selectData">Selecciona la provincia/estado:</label>
<br>
 

    <!-- Agrega el cuadro de texto para el buscador -->
    <input v-model="searchKeyword" placeholder="Buscar..." />

    <select id="selectData" v-model="selectedData" style="min-width: 200px;">
      <!-- Filtra las opciones según el texto de búsqueda -->
      <option v-for="opcion in filteredOptions" :key="opcion.id" :value="opcion.id">{{ opcion.name }}</option>
    </select>

  </div>
</template>

<script setup>
import { ref,  computed  } from 'vue';
import { useWeatherStore } from '@/store/clima';

const WStore = useWeatherStore();
const selectedType = ref(''); // Inicialmente, selecciona 'país'
const searchKeyword = ref('');



const dataOptions = ref({
  options: [], // Inicializa con un array vacío para evitar el error
 
});

async function onChangeType() {
  await WStore.fetchData(selectedType.value);
  dataOptions.value.options = WStore.dataOptions[selectedType.value];
}


// Filtra las opciones según el texto de búsqueda
const filteredOptions = computed(() => {
  return dataOptions.value.options.filter(opcion => opcion.name.toLowerCase().includes(searchKeyword.value.toLowerCase()));
});
</script>
