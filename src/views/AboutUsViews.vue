<template>
    <div class="about-us">
      <h1>{{ pageTitle }}</h1>
      <p>{{ loremIpsumText }}</p>
    </div>
</template>
  
<script setup>
  import { ref } from 'vue';
  
  const pageTitle = ref('Acerca de Nosotros');
  const loremIpsumText = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  
  // Puedes personalizar el texto de Lorem Ipsum según sea necesario.
</script>
  
<style scoped>
  .about-us {
    text-align: center;
  }
</style>
  