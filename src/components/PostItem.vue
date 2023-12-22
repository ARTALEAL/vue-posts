<template>
  <li class="post">
    <div>
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <div class="post-btns">
      <my-button class="open-btn" @click="$router.push(`/post/${post.id}`)"
        >Подробнее</my-button
      >
      <my-button class="delete-btn" @click="deletePost(post)"
        >Удалить</my-button
      >
    </div>
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deletePost(post) {
      this.$emit('delete-post', post);
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post-btns {
  display: flex;
  gap: 5px;
}
.delete-btn {
  color: darkred;
  border: 1px solid darkred;
}

.delete-btn:hover {
  color: white;
  background-color: darkred;
}

@media (width <= 600px) {
  .post {
    flex-direction: column;
  }
  .post-btns {
    margin-top: 15px;
  }
}
</style>
