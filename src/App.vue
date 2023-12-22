<template>
  <nav-bar></nav-bar>
  <div class="app">
    <router-view></router-view>
  </div>
  <my-footer></my-footer>
</template>

<script>
import NavBar from './components/UI/NavBar.vue';
import MyFooter from './components/MyFooter.vue';
export default {
  components: { NavBar, MyFooter },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  text-align: center;
}
.app {
  padding: 20px;
  min-height: calc(100vh - 100px);
}

.app__btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
</style>
