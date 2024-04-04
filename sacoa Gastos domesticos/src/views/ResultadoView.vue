<template>
    <div class="container">
      <h4>Suma de los números ingresados:</h4>
      <p>{{ suma }}</p>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['getInputData']),
      suma() {
        const inputData = this.getInputData;
        const suma = parseFloat(inputData.input1 || 0) + parseFloat(inputData.input2 || 0) + parseFloat(inputData.input3 || 0);
        return suma;
      }
    }
  };
  </script>
  
  <style scoped lang="scss">
  @import '@/assets/scss/estilos.modules.scss';
</style>
