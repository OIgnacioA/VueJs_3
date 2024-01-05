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

    <!-- Cambiado a un cuadro de texto para la búsqueda -->
    <input v-model="searchKeyword" placeholder="Buscar..." />

     <!-- Muestra las opciones filtradas dinámicamente solo si hay texto en el cuadro de búsqueda -->
     <div v-if="searchKeyword.trim() !== ''"  class="filtered-options-container">
      <div v-for="opcion in filteredOptions" :key="opcion.id" @click="selectOption(opcion)">
        {{ opcion.name }}
      </div>
    </div>
    <div v-else>
      No hay opciones disponibles.
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useWeatherStore } from '@/store/clima';

const WStore = useWeatherStore();
const selectedType = ref(''); // Inicialmente, selecciona 'país'
const searchKeyword = ref('');
const selectedData = ref(null); // Agregado

const dataOptions = ref({
  options: [], // Inicializa con un array vacío para evitar el error
});

async function onChangeType() {
  await WStore.fetchData(selectedType.value);
  dataOptions.value.options = WStore.dataOptions[selectedType.value];
}

// Filtra las opciones según el texto de búsqueda y el tipo seleccionado
const filteredOptions = computed(() => {
  return dataOptions.value.options.filter(opcion =>
    opcion.name.toLowerCase().includes(searchKeyword.value.toLowerCase())
  );
});

function selectOption(opcion) {
  // Selecciona la opción y realiza cualquier otra acción necesaria
  selectedData.value = opcion.id;
}
</script>

<style scoped>
/* Estilos para el contenedor de las opciones filtradas */
.filtered-options-container {
  position: absolute;
  z-index: 1000;
  background-color: rgba(173, 216, 230, 0.8); /* Azul claro transparente */
  border: 1px solid #3498db; /* Borde azul */
  border-radius: 10px; /* Bordes redondeados */
  margin-top: 5px; /* Espaciado desde arriba */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra ligera */
}

/* Estilos para las opciones filtradas */
.filtered-options {
  width: 100%;
  padding: 8px;
  background-color: white;
  border: none;
  border-radius: 8px;
  outline: none;
}

/* Estilo para resaltar la opción seleccionada */
.filtered-options option:checked {
  background-color: #3498db; /* Azul más oscuro */
  color: white;
}
</style>