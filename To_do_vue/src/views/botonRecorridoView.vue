<template>

<button @click="traerArray()">Ver: </button>

<p>{{tareaArray}}</p>

</template>


<script setup>
import {useStore} from 'vuex'
import {ref} from 'vue';

let store =useStore();
let tareaArray = ref('');



const traerArray = () => {
   tareaArray.value = JSON.parse(JSON.stringify(store.getters.getTarea));
  //console.log(tareaArray);
}



</script>