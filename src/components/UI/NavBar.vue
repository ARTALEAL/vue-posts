<template>
  <nav class="navbar" :class="isMenuOpen ? 'nav-active' : ''">
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
    <div class="nav-btn-mobile" @click="toggleMenu">
      <span class="burger"></span>
    </div>
    <ul
      class="nav-list-mobile"
      :class="isMenuOpen ? 'nav-list-mobile_open' : ''"
    >
      <li class="nav-item-mobile">
        <router-link class="nav-link" to="/posts" @click="toggleMenu"
          >Посты</router-link
        >
      </li>
      <li class="nav-item-mobile">
        <router-link class="nav-link" to="/posts-store" @click="toggleMenu"
          >Посты Vuex</router-link
        >
      </li>
      <li class="nav-item-mobile">
        <router-link
          @click="toggleMenu"
          class="nav-link"
          to="/posts-composition-api"
          >Composition API</router-link
        >
      </li>
      <li class="nav-item-mobile">
        <router-link class="nav-link" to="/about" @click="toggleMenu"
          >О проекте</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style>
.navbar {
  min-height: 50px;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 4px grey;
  position: relative;
  overflow: hidden;
}
.nav-btn-mobile {
  display: none;
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

.nav-list-mobile {
  display: none;
}

@media (width <= 600px) {
  .nav-list {
    display: none;
  }
  .nav-list-mobile {
    display: block;
  }
  .navbar {
    justify-content: flex-end;
    overflow: hidden;
  }
  .nav-active {
    overflow: visible;
  }
  .nav-btn-mobile {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 32px;
    height: 32px;
    margin-right: 15px;
  }

  .burger {
    border: 1px solid white;
    position: relative;
  }
  .burger::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -1px;
    width: 30px;
    border: 1px solid white;
  }
  .burger::after {
    content: '';
    position: absolute;
    top: 8px;
    left: -1px;
    width: 30px;
    border: 1px solid white;
  }
  .nav-list-mobile {
    display: flex;
    flex-direction: column;
    list-style: none;
    position: absolute;
    bottom: -126px;
    right: -500px;
    background-color: white;
    box-shadow: 0 0 5px grey;
    transition: 0.3s ease;
  }
  .nav-list-mobile_open {
    right: 0;
  }
  .nav-item-mobile {
    border-top: 1px solid teal;
    border-bottom: 1px solid teal;
    padding: 5px;
  }
  .nav-link {
    color: black;
  }
}
</style>
