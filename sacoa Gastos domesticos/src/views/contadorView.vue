<template>

<h1>{{cont}}</h1>

<button @click="contar()">clic!</button>

</template>

<script setup>
import {ref} from 'vue'; 

let cont = ref(0);
let num = 0 ; 


const contar= () => {
    num = num +1;  
   cont.value = num;


}



</script>