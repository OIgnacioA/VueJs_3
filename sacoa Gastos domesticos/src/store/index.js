// store/index.js
import { createStore } from 'vuex';
import { db } from '../firebaseConfig'; // Importa la configuración de Firebase
import { collection, addDoc } from 'firebase/firestore'; // Importa las funciones necesarias de Firestore

export default createStore({
  state: {
    inputData: [],
    Notas: null,
    Monto: 10000,
  },
  getters: {
    getInputData(state) {
      return state.inputData;
    }
  },
  mutations: {
    setDatos(state, payload) {
      state.inputData.push(payload);
    },
    setNotas(state, payload) {
      state.Notas = payload;
    }
  },
  actions: {
    MostrarData({ commit }, datos) {
      commit('setDatos', datos);
    },
    AddNotas({ commit }, datos2) {
      commit('setNotas', datos2);
    },
    async GenerarJson(context) {
      const Json1 = context.state;
      console.log("--->", Json1);

      try {
        // Sube el JSON a Firebase Firestore
        const docRef = await addDoc(collection(db, "yourCollectionName"), Json1);
        console.log("Document successfully written with ID: ", docRef.id);
      } catch (error) {
        console.error("Error writing document: ", error);
      }
    }
  }
});
