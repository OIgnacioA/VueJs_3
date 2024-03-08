<template>
  <div>
    <label for="genre">Selecciona un género:</label>
    <select v-model="ordenType" @change="handleOrdenSelect">
      <option value="" disabled>Elige un Órden</option>
      <option v-for="orders in order" :key="orders.name" :value="orders.name">{{ orders.name }}</option>
    </select>

    <div v-if="gen">
      <h2>{{ gen }}</h2>
      <div>
        <!-- Pasar el género seleccionado como prop al componente hijo -->
        <CompPrincipal  :orden="ordenType"     :genreKeyword="gen" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref , defineProps} from 'vue';
import CompPrincipal from './CompPrincipal.vue';

const order = ref([
  { name: 'Ranking', movies: [] },
  { name: 'Año', movies: [] },
]);



// eslint-disable-next-line vue/no-setup-props-destructure
const  {gen}  = defineProps(['gen']);
console.log("-----vvvv----->" + gen)
let ordenType = ref("");

const handleOrdenSelect = (event) => {
  ordenType.value = event.target.value;
}

</script>

<style scoped>
</style>
