/* eslint-disable no-unused-vars */
import { ref } from 'vue';

export default class AuthService {
  
  constructor() {
    this.jwt = ref('');
    this.error = ref('');
  }

  getJwt() {
    return this.jwt.value;
  }

  async login(email, password) {

    try {
      
      const res = await fetch('http://localhost:3000/login', {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const response = await res.json();


      if ('errors' in response) {
        
        this.error.value = "Login failed";
        return false;
      }

      this.jwt.value = response.data.access_token;
      return true;

    } catch (error) {
      console.log(error);
    }
  }
}
