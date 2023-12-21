import axios from 'axios';
export const postModule = {
  state: () => ({
    posts: [],
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
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) => {
        return post1[state.selectedSort]?.localeCompare(
          post2[state.selectedSort]
        );
      });
    },
    sortedAndSearchedPost(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.isLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setselectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    settotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit('setLoading', true);
        const responce = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit(
          'settotalPages',
          Math.ceil(responce.headers['x-total-count'] / this.limit)
        );
        commit('setPosts', responce.data);
      } catch (e) {
        console.log(e);
      } finally {
        commit('setLoading', false);
      }
    },

    async loadMorePosts({ state, commit }) {
      try {
        commit('setPage', (state.page += 1));
        const responce = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit(
          'settotalPages',
          Math.ceil(responce.headers['x-total-count'] / state.limit)
        );
        commit('setPosts', [...state.posts, ...responce.data]);
      } catch (e) {
        console.log(e);
      }
    },
  },
  namespaced: true,
};
