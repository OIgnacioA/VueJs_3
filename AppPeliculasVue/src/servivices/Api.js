import { ref } from 'vue';

class PostService {
  constructor() {
    this.posts = ref([]); // Ahora ref está importado y disponible aquí
    this.apiKey = '4ffbc361d3mshcdcfebe45dcd849p1d2771jsn75f72f959cf4';
    this.apiHost = 'imdb8.p.rapidapi.com';
  }

  async fetchAll(genreKeyword) {


    try {
      const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${genreKeyword}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': this.apiKey,
          'X-RapidAPI-Host': this.apiHost,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error al obtener datos: ${response.status}`);
      }
  
      const json = await response.json();
      this.posts.value = json.d;
   
    } catch (error) {
      console.error(error);
    }
  }


  getPosts() {
    return this.posts;
  }
  
}


export default PostService;
