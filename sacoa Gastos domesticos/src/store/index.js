import { createStore } from 'vuex'

export default createStore({
  state: {
    inputData: {
      input1: '',
      input2: '',
      input3: ''
    }
  },
  getters: {
    getInputData: state => state.inputData
  },
  mutations: {
    setInputData(state, payload) {
      state.inputData = payload;
      
    }
  },


  actions: {
    updateInputData({ commit }, newData) {
      commit('setInputData', newData);

    },
  
    realizarCalculo({ state }) {

      let Original = 10000;

      const inputData = state.inputData;
      const resu = parseFloat(inputData.input1 || 0) / 2;
      const dato1 = parseFloat(inputData.input2 || 0);
      const dato2 = parseFloat(inputData.input3 || 0);
      let respuesta;

      if (dato1 > dato2) {
        respuesta = dato1 - resu;
        console.log("Antonella debe: " + respuesta+ " a Oscar")
        Original = Original - respuesta;
        console.log("Deuda Original: " + Original )
      } else if (dato1 < dato2) {
        respuesta = dato2 - resu;
        console.log("Oscar debe: " + respuesta + " a Antonella")
        Original = Original + respuesta;
        console.log("Deuda Original: " + Original )
      } else {
        console.log( "No hay deuda");
      }

      return respuesta;
    }
  }
})