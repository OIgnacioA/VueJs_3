<template>
    <div class="container">
      <h2>{{ titulo }}</h2>
      <p>{{ descripcion }}</p>
      <select v-model="selectedValue">
        <option v-for="num in numeros" :key="num">{{ num }}</option>
      </select>
    </div>
  </template>
  
  <script setup>
 import { ref, computed, onMounted, watch } from 'vue';
 import { useStore } from 'vuex';
  
  const store = useStore();
  
  const titulo = computed(() => store.state.adicionalSalarialTitulo);
  const descripcion = computed(() => store.state.adicionalSalarialDescripcion);
  const min = computed(() => store.state.adicionalSalarialMin);
  const max = computed(() => store.state.adicionalSalarialMax);


  
  const selectedValue = ref(min.value);

  const numeros = computed(() => {
      const options = [];
      for (let i = min.value; i <= max.value; i++) {
          options.push(i);
      }
      return options;
  });


   //manejar el cambio en el desplegable y actualizar los años trabajados seleccionados en el store
    const handleYearsChange = () => {
    if (selectedValue.value !== null) {
        store.commit('setAñosTrabajadosSeleccionados', selectedValue.value);
    }
    };

    watch(selectedValue, handleYearsChange);
  
  onMounted(() => {
    selectedValue.value = min.value;
  });
  </script>

  <style scoped lang="scss">
    @import '@/assets/scss/estilos.modules.scss';
  </style>