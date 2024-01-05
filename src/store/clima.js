import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getConfig } from '@/api/calculadoraSalarial';

export const useSimStore = defineStore('sim', () => {
  const paises = ref([]);

  async function loadConfig() {
    try {
      const getConf = await getConfig();
      paises.value = getConf.paises || [];
    } catch (error) {
      console.error(error);
    }
  }

  function selectPais(pais) {
    // Aquí puedes realizar acciones adicionales si es necesario
    console.log(`Seleccionando país: ${pais}`);
  }

  return { paises, loadConfig, selectPais };
});
