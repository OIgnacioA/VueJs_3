<template>
    <div>
      <h2>{{ mensaje }}</h2>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  
  const store = useStore();
  
  const mensaje = store.state.mensaj;
  </script>
  