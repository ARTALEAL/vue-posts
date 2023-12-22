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
      ><post-form-vue @create-post="addPost" @close-after="closeModal"
    /></my-modal>
    <post-list-vue
      v-if="!isLoading"
      :posts="sortedAndSearchedPosts"
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
import MySelect from '@/components/UI/MySelect.vue';
import { ref } from 'vue';
import { usePosts } from '@/hooks/usePosts';
import { useSortedPosts } from '@/hooks/useSortedPosts';
import { useSortedAndSearchedPosts } from '@/hooks/useSortedAndSearchedPosts';

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
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По описанию' },
      ],
    };
  },
  methods: {
    closeModal(status) {
      this.isOpenModal = status;
    },
  },
  setup(props) {
    const { isLoading, posts, totalPages, loadMorePosts, deletePost, addPost } =
      usePosts(10);
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);

    return {
      isLoading,
      totalPages,
      selectedSort,
      searchQuery,
      posts,
      sortedPosts,
      sortedAndSearchedPosts,
      loadMorePosts,
      deletePost,
      addPost,
    };
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
