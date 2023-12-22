import Main from '@/pages/Main';
import PostsPage from '@/pages/PostsPage';
import PostsPageStored from '@/pages/PostsPageStored';
import PostsPageCompositionApi from '@/pages/PostsPageCompositionApi';
import About from '@/pages/About';
import PostPage from '@/pages/PostPage';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: Main },
  { path: '/posts', component: PostsPage },
  { path: '/posts-store', component: PostsPageStored },
  { path: '/posts-composition-api', component: PostsPageCompositionApi },
  { path: '/about', component: About },
  { path: '/post/:id', component: PostPage },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
