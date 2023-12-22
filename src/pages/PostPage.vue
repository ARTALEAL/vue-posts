<template>
  <h1>Страница поста с id = {{ $route.params.id }}</h1>
  <h2 v-if="isLoading">Загрузка...</h2>
  <h2 v-else>{{ post.title }}</h2>
  <p>{{ post.body }}</p>
  <my-button @click="$router.go(-1)">Вернуться назад</my-button>
</template>

<script>
import axios from 'axios';
import MyButton from '@/components/UI/MyButton.vue';
export default {
  data() {
    return {
      post: '',
      isLoading: false,
    };
  },
  methods: {
    async fetchPost() {
      try {
        this.isLoading = true;
        const responce = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
        );
        this.post = responce.data;
      } catch (e) {
        console.log(e);
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPost();
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 15px;
}
h2 {
  margin-bottom: 15px;
  text-align: center;
}
p {
  margin-bottom: 15px;
}
</style>
