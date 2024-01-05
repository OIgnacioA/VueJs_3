<script setup>
import { ref, onMounted } from 'vue';
// Corrige la ruta de importación para el store
import { useSimStore } from '@/store/clima'; // Asegúrate de que la ruta sea correcta

// Corrige la ruta de importación para el servicio
import WeatherService from '@/services/Api'; // Asegúrate de que la ruta sea correcta

const simStore = useSimStore();
const weatherService = new WeatherService();

const selectedPais = ref(null);
const paises = ['Argentina', 'Brasil', 'Chile', 'España', 'Francia', 'Italia', 'México', 'Perú', 'Estados Unidos', 'Canadá'];

async function seleccionarPais() {
  if (selectedPais.value) {
    // Actualizar el clima al seleccionar un país
    await weatherService.fetchWeather(selectedPais.value);
  }
}

// Cargar la configuración y obtener el clima al montar el componente
onMounted(async () => {
  await simStore.loadConfig();
  // Puedes agregar más lógica de inicialización aquí si es necesario
});
</script>

