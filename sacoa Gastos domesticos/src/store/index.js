import { createStore } from 'vuex'

export default createStore({
  state: {
    inputData: {
      input1: '',
      input2: '',
      input3: ''
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
      state.mensaj = Original;



      const inputData = state.inputData;
      let resu = parseFloat(inputData.input1 || 0);
      const dato1 = parseFloat(inputData.input2 || 0);
      const dato2 = parseFloat(inputData.input3 || 0);
      let respuesta;


      if ((dato1 != null) || dato1 == 0){
        resu = resu/2;
      }

      if((dato1 + dato2) != parseFloat(inputData.input1)){

        Original =  "los montos no suman la cantidad correcta"; 

      }else {

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