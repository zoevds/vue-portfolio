<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
   
  </nav> -->
  <navbar />
  <router-view />
  <Footer1 />
</template>
<script>
import Footer1 from "./components/Footer.vue";
import navbar from "./components/navbar.vue";

export default {
  components: { navbar, Footer1 },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  cursor: pointer;
}

nav {
  padding: 30px;
}
a {
  cursor: pointer;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
