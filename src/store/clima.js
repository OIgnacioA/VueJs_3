// store/clima.js
import { defineStore } from 'pinia';
import countriesJson from '@/countries/json/countries.json';
import citiesJson from '@/countries/json/cities.json';
import statesJson from '@/countries/json/states.json';

export const useWeatherStore = defineStore('clima', () => {
  const dataOptions = {
    pais: [],
    ciudad: [],
    provincia: [],
  };

  async function fetchData(type) {
    try {
      let jsonData;
      let OriginalName;

      // Determinar el nombre del archivo JSON según el tipo
      if (type === 'pais') {
        jsonData = countriesJson;
        OriginalName = "countries";
      } else if (type === 'ciudad') {
        jsonData = citiesJson;
        OriginalName = "cities";
      } else if (type === 'provincia') {
        jsonData = statesJson;
        OriginalName = "states";
      } else {
        // Manejar un tipo desconocido (puedes lanzar un error o manejarlo según tu necesidad)
        console.error(`Tipo desconocido: ${type}`);
        return;
      }

     
       dataOptions[type] = jsonData[OriginalName]; // Ajuste aquí, usando la propiedad correcta

       //console.log(`Seleccionando ${type}:`,  dataOptions[type].map(opcion => opcion.name));
    } catch (error) {
      console.error(error);
    }
  }

  return { dataOptions, fetchData };
});
