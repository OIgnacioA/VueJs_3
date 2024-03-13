<template>
    <h1>About view</h1>
    <form>
        <div class="container">
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Enter email" v-model="email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                v-model="password">
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="authUser">Submit</button>

        {{ email }}
        {{ password }}

    </div>
    <div v-if="responseData" class="border border-dark rounded d-inline-block p-3">
      <!-- Mostrar los datos de la respuesta del servidor -->
      <p>Access Token: {{ responseData.access_token }}</p>
      <p>Expires: {{ responseData.expires }}</p>
      <p>Refresh Token: {{ responseData.refresh_token }}</p>
    </div>
  
    </form>
</template>

<script setup>
import { ref } from 'vue'
import AuthService from '../servicios/AuthService'

let email = ref("")
let password = ref("")
let responseData = ref(null)

const authUser = async () => {
  const auth = new AuthService()
  const response = await auth.login(email.value, password.value);

  if (response) {
   
    responseData.value = response.data; // Guardar los datos devueltos por el servidor
    // Mostrar los datos devueltos por el servidor en la consola (puedes modificar esto según tus necesidades)
      
  } else {
    alert('login incorrecto');
  }
}
</script>
