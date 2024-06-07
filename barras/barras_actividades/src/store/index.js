import { createStore } from 'vuex'
import { db } from '../firebaseConfig'; // Importa la configuración de Firebase
import { doc, updateDoc } from 'firebase/firestore'; // Importa las funciones necesarias de Firestore

export default createStore({
  state: {Data : []
  },
  getters: {

    getDatos(state){

      return state.Data; 

    }

  },
  mutations: {
   
    setDatos(state, payLoad){

      state.Data.push(payLoad); 
  
    }

  },

  actions: {

    cargarDato({commit}, dat){
      commit('setDatos', dat)
      this.dispatch('actualizarValorBarra', dat);
    },
    
    async actualizarValorBarra(context, dat) {
      const docId = '18BaIG06IpOJ9pOzoPDo'; // ID del documento existente
      const docRef = doc(db, 'yourCollectionName', docId);

      try {
        await updateDoc(docRef, {
          ValorBarra: dat.ValorBarra
        });
        console.log("Document successfully updated");
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    }
  }
});
