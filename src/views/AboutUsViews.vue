<template>
  <div class="page">
    <div class="header">
      <!-- ... (código del header) ... -->
    </div>
    <div class="txt_title">Roles y Descripciones</div>
    <div v-for="role in roles" :key="role.id">
      <div class="role-title">{{ role.nombre }}</div>
      <div class="role-description">{{ role.descripcion }}</div>
      <!-- Puedes agregar más información según tus necesidades -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import RoleService from '@/services/Api';

const roleService = new RoleService();
const roles = ref([]);

onMounted(async () => {
  // Cargar roles y descripciones al montar la página
  await roleService.fetchAllRoles();
  roles.value = roleService.getRoles();
});
</script>

  