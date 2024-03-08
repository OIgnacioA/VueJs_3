<script setup>
import { ref, defineProps } from "vue";

const { onNewItem } = defineProps(["onNewItem"]);
const text = ref("");

function handleSubmit() {
  if (text.value !== "") {
    onNewItem(text.value);
    text.value = "";
  }
}
</script>

<template>
  <form action="" @submit.prevent="handleSubmit">
    <input type="text" v-model="text">
  </form>
</template>

<style>
form{
  margin-bottom: 10px;
}

input{
width: 100%;
box-sizing: border-box;

}
</style>