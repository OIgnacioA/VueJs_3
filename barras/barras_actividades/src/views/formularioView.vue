<template>

    <input type="text" v-model="Palabra" ><br><br>

    <button @click="Envio(Palabra)">Enviar</button><br><br>

    <button @click="Pulls()">Traer</button> 

     <h2>{{texto}}</h2>

</template>



<script setup>
import { ref } from 'vue' ; 
import {useStore}  from 'vuex'; 

let Palabra = ref(''); 
let store = useStore(); 
let texto = ref('');

const Envio = () => {

    let datos = {Palabra : Palabra.value};

    store.dispatch('takeData', datos)
    store.dispatch('SubirJson')
    Palabra.value = ""; 
}

const Pulls = () => {

  texto.value =  store.getters.getDatos[0];
  console.log(texto.value);
}



</script>