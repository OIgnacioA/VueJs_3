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
      console.log('La suma de los tres números es:' + state.inputData.input1);
    }
  },


  actions: {
    updateInputData({ commit }, newData) {
      commit('setInputData', newData);

    }
  }
})