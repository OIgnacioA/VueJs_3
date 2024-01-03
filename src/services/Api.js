// Modifica tu servicio para obtener roles y descripciones
import { ref } from 'vue';

class RoleService {
  constructor() {
    this.roles = ref([]);
    this.apiUrl = 'https://api-dev.informaticos.ar/public/calculadora_salarial_conf';
  }

  async fetchAllRoles() {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error al obtener datos: ${response.status}`);
      }

      const json = await response.json();
      // Extraemos la lista de roles y sus descripciones
      this.roles.value = json.data.rol_laboral || [];
    } catch (error) {
      console.error(error);
    }
  }

  getRoles() {
    return this.roles;
  }
}

export default RoleService;
