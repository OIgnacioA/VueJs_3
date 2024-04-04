<template>
  <div class="container">
    <div class="text-input-container">
      <div class="text-input">
        <label>Monto Total</label><br>
        <input type="text" v-model="input1Value" @input="updateStore">
      </div>
      <div class="text-input">
        <label>Oscar :</label>
        <input type="text" v-model="input2Value" @input="updateStore">
      </div>
      <div class="Parcial 2">
        <label>Antonella :</label>
        <input type="text" v-model="input3Value" @input="updateStore">
      </div><br>
    </div>
    <div>
      <label>
        <input type="radio" v-model="tipoDePago" value="dividido" @click="updateStore" name="tipoDePago"> Dividido
      </label>
      <label>
        <input type="radio" v-model="tipoDePago" value="full" @click="updateStore" name="tipoDePago"> Full
      </label>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

let input1Value = '';
let input2Value = '';
let input3Value = '';
let tipoDePago = '';

const updateStore = () => {
  
  
  store.dispatch('updateInputData', {
    input1: input1Value,
    input2: input2Value,
    input3: input3Value,
    tipoDePago: tipoDePago
  },

  );
};

</script>

<style scoped lang="scss">
@import '@/assets/scss/estilos.modules.scss';
</style>
