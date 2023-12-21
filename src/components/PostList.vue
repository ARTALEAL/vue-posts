<template>
  <div v-if="posts.length > 0">
    <h3>Список постов</h3>
    <ul>
      <transition-group name="post-list">
        <post-item-vue
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @delete-post="$emit('delete-post', post)"
        />
      </transition-group>
    </ul>
  </div>
  <h3 v-else>Посты в данный момент отсутствуют</h3>
</template>

<script>
import PostItemVue from './PostItem.vue';
export default {
  components: {
    PostItemVue,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: rotateX(90deg);
}
.post-list-move {
  transition: transform 0.4s ease;
}
</style>
