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

    setNombreTarea(state, payload) {
      const tareaModificada = state.Tarea.find(tarea => tarea.Id === payload.Id);

      console.log(payload.Id);
      if (tareaModificada) {
        tareaModificada.Nombre = payload.nuevoNombre;
      }
      console.log(state.Tarea.Id)
      
    },


    SetBorrar(state, payload) {
      console.log("---->" + payload)
      state.Tarea = state.Tarea.filter(tarea => tarea.Id !== payload.Id);
      console.log(JSON.parse(JSON.stringify(state.Tarea)))
    }
    
    
  
  },
  actions: {
    agregarNueva({commit}, nueva){
    commit('setTareaNueva', nueva)
    
    },

    Modificacion({commit}, cambio){

      commit('setNombreTarea', cambio)
      
    },

    borrarContenido({commit}, cambio){

      commit('SetBorrar', cambio)
      
    },


  },
  modules: {}
})
