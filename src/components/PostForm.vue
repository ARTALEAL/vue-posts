<template>
  <form @submit.prevent="addPost">
    <h4>Создать пост</h4>
    <input
      v-focus
      v-model="post.title"
      class="input"
      type="text"
      placeholder="Название поста"
      required
    />
    <label for="description">Описание поста</label>
    <textarea
      v-model="post.body"
      class="input"
      name="description"
      id="description"
      required
    ></textarea>
    <my-button class="btn add-btn" type="submit">Добавить пост</my-button>
  </form>
</template>

<script>
import MyButton from './UI/MyButton.vue';
export default {
  components: { MyButton },
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    };
  },
  methods: {
    addPost() {
      this.post.id = Date.now();
      this.$emit('create-post', this.post);
      this.post = {
        title: '',
        body: '',
      };
    },
  },
};
</script>

<style scoped>
form {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
}
.input {
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
label {
  margin-top: 15px;
}
.add-btn {
  margin-top: 15px;
  align-self: flex-end;
}
</style>
