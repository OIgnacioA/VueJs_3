import { createStore } from 'vuex'

export default createStore({
  state: {
    inputData: {
      input1: '',
      input2: '',
      input3: '',
      tipoDePago:null,
    },
    mensaj: null,
    originalInicial: 10000, // Almacenar el valor inicial de Original
    
  },
  getters: {
    getInputData: state => state.inputData
  },
  mutations: {
    setInputData(state, payload) {
      state.inputData = payload;
      
    },
    setMensajes(state, mensaj) {
      state.mensaj = mensaj;
    },

  },


  actions: {
    updateInputData({ commit }, newData) {
      commit('setInputData', newData);
      
    },
  
    realizarCalculo({ state }) {


      let Original = state.originalInicial;
      let Tipo = state.inputData.tipoDePago; // Obtener tipoDePago desde el estado
      state.mensaj = Original;

     

      const inputData = state.inputData;
      let Total = parseFloat(inputData.input1 || 0);
      const dato1 = parseFloat(inputData.input2 || 0);
      const dato2 = parseFloat(inputData.input3 || 0);
      let respuesta;


      if(dato1 == 0 && dato2 == 0){

        Original =  "debes colocar al menos un monto en los usuarios"; 

      }else if ((dato1 + dato2) != parseFloat(inputData.input1)) {

        Original =  "los montos no suman la cantidad correcta"; 

      } else {


        if (Tipo == "dividido"){ //Cuenta dividida
          Total = Total/2;

          if (dato1 > dato2) {

            respuesta = dato1 - Total;      
            Original = Original - respuesta;
       
           
          } else if (dato1 < dato2) {
    
            respuesta = dato2 - Total;
            Original = Original + respuesta; 
      
          } else {
            console.log( "No hay deuda");
          }
        }else { //Gasto total de una de las partes


          if (dato1 == null || dato1 == 0) {

                
            Original = Original + Total;
       
           
          } else if (dato2 == null || dato2 == 0) {
    
            Original = Original - Total;
      
          } 
        }
      }

      return Original;
    }
  }
})