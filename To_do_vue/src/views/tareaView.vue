<template>

  <div style="display: flex; flex-wrap: wrap;">
    <p>{{ nombreTemp }}</p><br>
    <input type="text" v-model="nuevoNombre">
    <button @click="modificarTarea(IdTemp, nuevoNombre)">Modificar</button>
    <button @click="borrar(IdTemp)">Borrar</button>
  </div>

</template>
  
<script setup>
import { useStore } from 'vuex';
import { ref, defineProps } from 'vue';
  
const store = useStore();

const props = defineProps({
    Nombre: String,
    Id: Number
});

const nombreTemp = ref(props.Nombre);
const IdTemp = ref(props.Id);
const nuevoNombre = ref('');

const modificarTarea = (Id, nuevoNombre) => {
    store.dispatch('Modificacion', {Id, nuevoNombre });
    nombreTemp.value = nuevoNombre;
   // nuevoNombre.value = "";
}

const borrar = (IdTemp) => {
    store.dispatch('borrarContenido', IdTemp);
}
</script>
