<template>
    <div class="container">
      <h4>Respuesta del cálculo:</h4>
      <p>{{ respuesta }}</p>
    </div>
  </template>
  
  <script>
  //import { mapActions } from 'vuex';
  
  export default {
    computed: {
      respuesta() {
        return this.$store.dispatch('realizarCalculo');
      }
    }
  };
  </script>
  
  <style scoped lang="scss">
  @import '@/assets/scss/estilos.modules.scss';
  </style>
  