import { ref, onMounted } from 'vue';
import axios from 'axios';

export function usePosts(limit) {
  const posts = ref([]);
  let totalPages = ref(0);
  const isLoading = ref(true);
  let page = ref(1);

  const fetching = async () => {
    try {
      const responce = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
        {
          params: {
            _page: page,
            _limit: limit,
          },
        }
      );
      totalPages.value = Math.ceil(responce.headers['x-total-count'] / limit);
      posts.value = responce.data;
    } catch (e) {
      console.log(e);
    } finally {
      isLoading.value = false;
    }
  };
  const loadMorePosts = async () => {
    try {
      page.value++;
      const responce = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
        {
          params: {
            _page: page.value,
            _limit: limit,
          },
        }
      );
      totalPages = Math.ceil(responce.headers['x-total-count'] / limit);
      posts.value = [...posts.value, ...responce.data];
    } catch (e) {
      console.log(e);
    }
  };

  function deletePost(post) {
    posts.value = posts.value.filter((item) => item.id !== post.id);
  }

  function addPost(newPost) {
    posts.value.push(newPost);
  }

  onMounted(fetching);

  return {
    posts,
    totalPages,
    isLoading,
    loadMorePosts,
    deletePost,
    addPost,
  };
}
