<template>
  <div>
    <ul class="movie-list">
      <li v-for="movie in movies" :key="movie?.id" class="movie-item">
        <div class="movie-card">
          <img
            :src="movie?.i?.imageUrl"
            :alt="movie?.l"
            height="100px"
            class="zoom-image"
          />
          <p class="movie-title">{{ movie?.l }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';
import PostService from '@/servivices/Api';

export default {
  name: 'CompPrincipal',
  props: {
    genreKeyword: String,
  },
 
  setup(props) {
    const service = new PostService();
    const movies = ref([]);

    const fetchMovies = async (genreKeyword) => {
      try {
        await service.fetchAll(genreKeyword);
        movies.value = service.getPosts().value;
      } catch (error) {
        console.error(error);
      }
    };

    watchEffect(() => {
      if (props.genreKeyword) {
        fetchMovies(props.genreKeyword);
      }
    });

    return {
      movies,
    };
  },
};
</script>

<style scoped>
.movie-list {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.movie-item {
  text-align: center;
  flex: 0 0 calc(33.33% - 20px);
}

.movie-card {
  background-color: #333;
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
  text-align: center;
}

.movie-title {
  font-weight: bold;
  font-family: 'Consolas', monospace;
  color: white;
}

.zoom-image {
  transition: transform 0.3s ease-in-out;
}

.zoom-image:hover {
  transform: scale(3);
  overflow: visible;
}
</style>
