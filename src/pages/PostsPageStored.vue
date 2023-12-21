<template>
  <main class="posts">
    <h1>Страница с постами</h1>
    <input
      class="search-input"
      type="text"
      :value="searchQuery"
      @input="updateSearch"
      placeholder="поиск"
    />
    <div class="app__btns">
      <my-button class="btn-post-create" @click="isOpenModal = !isOpenModal"
        >Создать пост</my-button
      >
      <my-select
        :model-value="selectedSort"
        @update:model-value="setselectedSort"
        :options="sortOptions"
      ></my-select>
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
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';

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
      isOpenModal: false,
    };
  },
  methods: {
    updateSearch(e) {
      this.setSearchQuery(e.target.value);
    },
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setselectedSort: 'post/setselectedSort',
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts',
    }),
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
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isLoading: (state) => state.post.isLoading,
      selectedSort: (state) => state.post.selectedSort,
      sortOptions: (state) => state.post.sortOptions,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPost: 'post/sortedAndSearchedPost',
    }),
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
