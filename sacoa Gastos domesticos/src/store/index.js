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
    setTipoDePago(state, tipoDePago) {
      state.inputData.tipoDePago = tipoDePago; // Actualizar tipoDePago en inputData
    },
  },


  actions: {
    updateInputData({ commit }, newData) {
      commit('setInputData', newData);
      commit('setTipoDePago', newData.tipoDePago); // Llamar a la mutación setTipoDePago
    },
  
    realizarCalculo({ state }) {


      let Original = state.originalInicial;
      let Tipo = state.inputData.tipoDePago; // Obtener tipoDePago desde el estado
      state.mensaj = Original;

      console.log(Tipo);

      const inputData = state.inputData;
      let resu = parseFloat(inputData.input1 || 0);
      const dato1 = parseFloat(inputData.input2 || 0);
      const dato2 = parseFloat(inputData.input3 || 0);
      let respuesta;


    

      if((dato1 + dato2) != parseFloat(inputData.input1)){

        Original =  "los montos no suman la cantidad correcta"; 

      }else {


        if (Tipo == "dividido"){
          resu = resu/2;
        }

        if (dato1 > dato2) {

          respuesta = dato1 - resu;      
          Original = Original - respuesta;
     
         
        } else if (dato1 < dato2) {
  
          respuesta = dato2 - resu;
          Original = Original + respuesta; 
    
        } else {
          console.log( "No hay deuda");
        }

      }
      

      return Original;
    }
  }
})