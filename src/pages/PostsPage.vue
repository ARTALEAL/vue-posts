<template>
  <main class="posts">
    <h1>Страница с постами</h1>
    <input
      class="search-input"
      type="text"
      v-model="searchQuery"
      placeholder="поиск"
    />
    <div class="app__btns">
      <my-button class="btn-post-create" @click="isOpenModal = !isOpenModal"
        >Создать пост</my-button
      >
      <my-select v-model="selectedSort" :options="sortOptions"></my-select>
    </div>
    <my-modal :isOpen="isOpenModal" @close-modal="closeModal"
      ><post-form-vue @create-post="addPost"
    /></my-modal>
    <post-list-vue
      v-if="!isLoading"
      :posts="sortedAndSearchedPost"
      @delete-post="deletePost"
    />
    <div v-else>Идёт загрузка...</div>

    <!-- Pagination -->

    <!-- <ul class="pagination-list">
      <li
        class="pagination-item"
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        :class="{ 'current-page': pageNumber === page }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </li>
    </ul> -->
    <div v-intersection="loadMorePosts" class="observer"></div>
  </main>
</template>

<script>
import PostFormVue from '@/components/PostForm.vue';
import PostListVue from '@/components/PostList.vue';
import MyButton from '@/components/UI/MyButton.vue';
import MyModal from '@/components/UI/MyModal.vue';
import axios from 'axios';
import MySelect from '@/components/UI/MySelect.vue';

export default {
  components: {
    PostFormVue,
    PostListVue,
    MyModal,
    MyButton,
    MySelect,
  },
  data() {
    return {
      posts: [],
      isOpenModal: false,
      isLoading: false,
      selectedSort: '',
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По описанию' },
      ],
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
    };
  },
  methods: {
    addPost(newPost) {
      this.posts.push(newPost);
      this.closeModal(false);
    },
    deletePost(post) {
      this.posts = this.posts.filter((item) => item.id !== post.id);
    },
    closeModal(status) {
      this.isOpenModal = status;
    },
    async fetchPosts() {
      try {
        this.isLoading = true;
        const responce = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          responce.headers['x-total-count'] / this.limit
        );
        this.posts = responce.data;
      } catch (e) {
        console.log('Что-то пошло не так');
      } finally {
        this.isLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page++;
        const responce = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          responce.headers['x-total-count'] / this.limit
        );
        this.posts = [...this.posts, ...responce.data];
      } catch (e) {
        console.log('Что-то пошло не так');
      }
    },
    // changePage(pageNumber) {
    //   this.page = pageNumber;
    // },
  },
  mounted() {
    this.fetchPosts();
    // const options = {
    //   root: document.querySelector('#scrollArea'),
    //   rootMargin: '0px',
    //   threshold: 1.0,
    // };
    // const callback = (entries, observer) => {
    //   if (entries[0].isIntersecting && this.page < this.totalPages) {
    //     this.loadMorePosts();
    //   }
    // };
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        );
      });
    },
    sortedAndSearchedPost() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    // page() {
    //   this.fetchPosts();
    // },
  },
};
</script>

<style scoped>
.search-input {
  border: 1px solid teal;
  padding: 5px 15px;
  margin-top: 15px;
}
.pagination-list {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
}
.pagination-item {
  border: 1px solid black;
  padding: 10px;
}
.pagination-item:hover {
  cursor: pointer;
  background-color: teal;
  color: white;
}
.current-page {
  border: 2px solid teal;
}
</style>
