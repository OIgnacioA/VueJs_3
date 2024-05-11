import { createStore } from 'vuex'

export default createStore({
  state: {
    inputData: [], 
    Notas:null,
    Monto: 10000, // Almacenar el valor inicial de Original
  },

  getters: {
    getInputData (state) { 
      return state.inputData;
    }
  },


  mutations: {

 
    setDatos(state, payload){

      state.inputData.push(payload);
      

    },

    setNotas(state, payload){

      state.Notas = payload; 
      
    }

  },


  actions: {

    MostrarData({commit}, datos) {
     
       commit('setDatos', datos)

    },

    AddNotas({commit}, datos2){

      commit('setNotas', datos2);

    },

    GenerarJson(context){

     //let MontoNuevo = state.inputData.Monto; 
     
     console.log(context.state.inputData[0]);
     console.log(context.state.Notas);



    }

   
  }
})