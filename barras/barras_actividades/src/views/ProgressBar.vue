<template>
  <div class="progress-container">
    <div :class="progressClass" class="progress-bar" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  progress: {
    type: Number,
    required: true,
    validator: value => value >= 0 && value <= 100
  }
});

const progressClass = computed(() => {
  if (props.progress < 20) return 'red';
  if (props.progress < 60) return 'yellow';
  if (props.progress < 85) return 'green';
  return 'blue';
});
</script>

<style scoped>
.progress-container {
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 10px;
  border: 2px solid black;
  overflow: hidden;
}

.progress-bar {
  height: 20px;
  border-radius: 10px;
  transition: width 0.5s;
}

.red {
  background-color: red;
}

.yellow {
  background-color: yellow;
}

.green {
  background-color: green;
}

.blue {
  background-color: blue;
}
</style>
