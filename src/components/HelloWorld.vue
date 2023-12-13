<template>
 <div class="container">
  <button @click="sumarNum">Sumar</button>
  <h3>{{num}}</h3>
 </div>
</template>

<script setup>
import {ref} from 'vue'

let num = ref(0)

function sumarNum () {

  num.value = num.value + 1 ;
console.log("------->" + num.value)
}

</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Opcional: ajusta la altura del contenedor según el 100% de la altura visible */
}
</style>