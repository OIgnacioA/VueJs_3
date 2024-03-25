<template>
  <div class="container">
    <div class="text-input-container">
      <div class="text-input">
        <label for="Monto Total">{{ input1Title }}</label>
        <input type="text" id="input1" v-model="input1Value">
      </div>
      <div class="text-input">
        <label for="Parcial 1">{{ input2Title }}</label>
        <input type="text" id="input2" v-model="input2Value">
      </div>
      <div class="Parcial 2">
        <label for="input3">{{ input3Title }}</label>
        <input type="text" id="input3" v-model="input3Value">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1Title: 'Title 1',
      input2Title: 'Title 2',
      input3Title: 'Title 3',
      input1Value: '',
      input2Value: '',
      input3Value: ''
    };
  }
};
</script>

<style scoped lang="scss">
  @import '@/assets/scss/estilos.modules.scss';
</style>

