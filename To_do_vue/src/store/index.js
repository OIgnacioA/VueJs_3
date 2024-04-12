import { createStore } from 'vuex'

export default createStore({
  state: {
        Tarea : [],
  },
  getters: {
  getTarea : store => store.Tarea
  },
  mutations: {
    setTareaNueva(state, payload){      
     state.Tarea.push(payload)
     
    },

    setCambio(state, { id, nombre }) {
      state.Tarea = state.Tarea.map(tarea => {
        if (tarea.Id === id) {
          tarea.Nombre = nombre;
        }
        
        return tarea;
      });
    }
  },
  actions: {
    agregarNueva({commit}, nueva){
    commit('setTareaNueva', nueva)
    
    },

    Modificacion({commit}, cambio){
      commit('setCambio', cambio)
      
    }



  },
  modules: {}
})
