// store/index.js
import { createStore } from 'vuex';
import { db } from '../firebaseConfig';
import { collection, addDoc, query, orderBy, limit, getDocs, serverTimestamp } from 'firebase/firestore';

export default createStore({
  state: {
    inputData: [],
    Notas: null,
    Monto: 0, // Valor inicial
  },
  getters: {
    getInputData(state) {
      return state.inputData;
    }
  },


  mutations: {
    setDatos(state, payload) {

  

     if((payload.Person == 'Anto') && ){

      console.log(payload);

     }











    state.inputData.push(payload);
    },
    setNotas(state, payload) {
      state.Notas = payload;
    },
    setMonto(state, payload) {
      state.Monto = payload;
    }
  },
  actions: {
    MostrarData({ commit }, datos) {
      commit('setDatos', datos);
    },
    AddNotas({ commit }, datos2) {
      commit('setNotas', datos2);
    },



    //SUBIR DATOS.
    async GenerarJson(context) {
      const Json1 = {
        ...context.state,
        timestamp: serverTimestamp() // Añade un timestamp al documento
      };

      try {
        // Sube el JSON a Firebase Firestore
        const docRef = await addDoc(collection(db, "MiColeccion"), Json1);
        console.log("Document successfully written with ID: ", docRef.id);
      } catch (error) {
        console.error("Error writing document: ", error);
      }

      // ReseteaR el estado 
      context.state.inputData = [];
      context.state.Monto = 0; 
      context.state.Notas = "";
    },


    //TRAER DATOS
    async fetchLastDocument({ commit }) {
      try {
      
        const q = query(collection(db, "MiColeccion"), orderBy("timestamp", "desc"), limit(1));
        const querySnapshot = await getDocs(q);

      
        querySnapshot.forEach((doc) => {
          const data = doc.data();
        
          if (data && data.Monto !== undefined) {
            commit('setMonto', data.Monto);
          } else {
            console.log("---> No Monto field in document");
          }
        });


      } catch (error) {
        console.error("Error fetching document: ", error);
      }


    }
  }
});
