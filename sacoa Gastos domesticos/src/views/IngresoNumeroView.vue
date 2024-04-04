<template>
  <div class="container">
    <div class="text-input-container">
      <div class="text-input">
        <label>Monto Total</label><br>
        <input type="text" id="input1" v-model="input1Value" @input="updateStore">
      </div>
      <div class="text-input">
        <label>Oscar :</label>
        <input type="text" id="input2" v-model="input2Value" @input="updateStore">
      </div>
      <div class="Parcial 2">
        <label>Antonella :</label>
        <input type="text" id="input3" v-model="input3Value" @input="updateStore">
      </div><br>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1Value: '',
      input2Value: '',
      input3Value: ''
    };
  },

  methods: {
    updateStore() {

      this.$store.dispatch('updateInputData', {
        input1: this.input1Value,
        input2: this.input2Value,
        input3: this.input3Value
      });
    },
  
  }
};

</script>

<style scoped lang="scss">
  @import '@/assets/scss/estilos.modules.scss';
</style>
