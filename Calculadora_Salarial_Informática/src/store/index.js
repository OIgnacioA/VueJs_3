// store/index.js
import { createStore } from 'vuex';
import informacion from '@/assets/data/informacion.json';

const store = createStore({
  state: {
    profesiones: [],
    dataLoaded: false,
    selectedProfesion: null, // Variable para almacenar la profesión seleccionada
    salarioRelativo: null,
    salarioBase: null, // Salario base, inicialmente nulo
    porcentajeSalario: null, // Porcentaje del salario base, inicialmente nulo
    añosTrabajadosSeleccionados: null, //    años trabajados seleccionados

    adicionalSalarialMin: null, //  valor mínimo adicional salarial
    adicionalSalarialMax: null, // valor máximo adicional salarial
    adicionalSalarialTitulo: null, //  título adicional salarial
    adicionalSalarialDescripcion: null, //  descripción adicional salarial

  },
  mutations: {
    setProfesiones(state, profesiones) {
      state.profesiones = profesiones;
      state.dataLoaded = true;
      
    },
    // actualizar la profesión seleccionada
    setSelectedProfesion(state, profesion) {
      state.selectedProfesion = profesion.nombre;
    },
    //  actualizar el salario relativo
    setSalarioRelativo(state, salario) {
      state.salarioRelativo = salario;
    },
    // actualizar el salario base
    setSalarioBase(state, salarioBase) {
      state.salarioBase = salarioBase;
    },
    // actualizar el porcentaje del salario base
    setPorcentajeSalario(state, porcentaje) {
      state.porcentajeSalario = porcentaje;
    },
    // Mutación para establecer los datos adicionales salariales
    setAdicionalSalarial(state, datos) {
      state.adicionalSalarialMin = datos.min;
      state.adicionalSalarialMax = datos.max;
      state.adicionalSalarialTitulo = datos.titulo;
      state.adicionalSalarialDescripcion = datos.descripcion;
    },
    setAñosTrabajadosSeleccionados(state, añosTrabajados) {
      state.añosTrabajadosSeleccionados = añosTrabajados;
    },
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const profesiones = informacion.data.rol_laboral.map((profesion) => ({
          nombre: profesion.nombre,
          descripcion: profesion.descripcion,
        }));
        const salarioBase = informacion.data.sueldo_min_base; // Obtener el salario base del JSON
        const adicionalSalarial = informacion.data.adicional_salarial[0]; // Definimos adicionalSalarial aquí

     

        commit('setProfesiones', profesiones);
        commit('setSalarioBase', salarioBase);

        commit('setAdicionalSalarial', { // Actualizamos los datos adicionales salariales en el store
          min: adicionalSalarial.valores.input.min,
          max: adicionalSalarial.valores.input.max,
          titulo: adicionalSalarial.titulo,
          descripcion: adicionalSalarial.descripcion
        });

        return { profesiones, adicionalSalarial }; 
      } catch (error) {
        console.error('Error en fetchData:', error);
        throw error;
      }
    },

    async fetchSalarioRelativo({ commit }, nombreProfesion) {
      try {
        // Buscar la profesión correspondiente en los datos
        const profesion = informacion.data.rol_laboral.find(p => p.nombre === nombreProfesion);
        if (profesion) {
          // Si se encuentra la profesión, establecer el salario relativo correspondiente
          commit('setSalarioRelativo', profesion.salario_relativo * 1000);
        } else {
          // Si no se encuentra la profesión, establecer el salario relativo como null
          commit('setSalarioRelativo', null);
        }
      } catch (error) {
        console.error('Error al obtener el salario relativo:', error);
        throw error;
      }
    }

  },
  getters: {
    getProfesiones: (state) => {
      return state.profesiones;
    },
    
    // Getter para obtener el salario relativo
    
    getSalarioRelativo(state) {
      const salarioBase = state.salarioBase ; 
      const salarioRelativo = state.salarioRelativo ; 
      const añosTrabajadosSeleccionados = state.añosTrabajadosSeleccionados || 0; // Por si acaso añosTrabajadosSeleccionados es null
      
    
          // Para que no se vea salario base. 
      if (salarioRelativo == null ){
            
        return 0;

      }

      // Calculamos el salario total sumando el salario base, el salario relativo y el incremento por años trabajados
      const salarioTotal = salarioBase + salarioRelativo + ((añosTrabajadosSeleccionados / 100) * salarioBase);

      // Formateamos el salario total con separador de miles y máximo de dos dígitos después de la coma
      const salarioFormateado = salarioTotal.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

      return salarioFormateado;
    },
    
  },

 
  modules: {},
});
1
export default store;