<template>
  <nav class="navbar">
    <h2 class="nav-logo" @click="$router.push('/')">Vue3</h2>
    <ul class="nav-list">
      <li class="nav-item">
        <router-link class="nav-link" to="/posts">Посты</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/posts-store">Посты Vuex</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/posts-composition-api"
          >Composition API</router-link
        >
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">О проекте</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  min-height: 50px;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 4px grey;
}
.nav-logo {
  position: absolute;
  left: 30px;
  text-decoration: none;
  color: white;
  text-shadow: 2px 2px 5px black;
  transition: 0.4s ease;
}
.nav-logo:hover {
  cursor: pointer;
  text-shadow: 2px 2px 5px turquoise;
}
.nav-list {
  list-style: none;
  display: flex;
  gap: 15px;
}
.nav-item {
  text-decoration: none;
  transition: 0.4s ease;
  padding: 5px;
  border: 1px solid white;
  box-shadow: 1px 1px 5px black;
}
.nav-item:hover {
  cursor: pointer;
  opacity: 0.8;
  background-color: white;
  box-shadow: 0px 0px 5px black;
}
.nav-link {
  text-decoration: none;
  color: white;
}

.nav-item:hover > .nav-link {
  color: black;
}
</style>
