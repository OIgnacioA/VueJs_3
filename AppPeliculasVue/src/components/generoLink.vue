<template>
  <router-link :to="`/${imgn}`">
    <div class="claqueta" :style="claquetaStyle" @mouseover="aumentarTamanio" @mouseout="disminuirTamanio">
      <div class="nombre-genero">{{ imgn }}</div>
      <img :src="require(`../assets/${imgn}.jpg`)" alt="Imagen dinámica" class="imagen-claqueta" />
    </div>
  </router-link>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const imagenes = defineProps(['imagen']);
const imgn = ref(imagenes.imagen);

const aumentarTamanio = () => {
  claquetaStyle.value = {
    transform: 'scale(1.1)',
    filter: 'brightness(100%)',
    transition: 'transform 0.5s, filter 0.5s',
  };
};

const disminuirTamanio = () => {
  claquetaStyle.value = {
    transform: 'scale(1)',
    filter: 'brightness(80%)',
    transition: 'transform 0.5s, filter 0.5s',
  };
};

const claquetaStyle = ref({
  border: '1px solid black',
  borderRadius: '5px',
  margin: '5px',
  maxWidth: '300px',
  maxHeight: '200px',
  transition: 'transform 0.5s, filter 0.5s',
});

</script>

<style scoped>
.claqueta {
  position: relative;
  display: inline-block;

}

.nombre-genero {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-weight: bold;
  padding: 5px;
  box-sizing: border-box;
  z-index: 1;
}

.imagen-claqueta {
  width: 100%;
  height: auto;
  transition: transform 0.5s, filter 0.5s;
}

</style>
