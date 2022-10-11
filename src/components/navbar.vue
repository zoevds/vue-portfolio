<template>
  <header>
   
    <div id="nav-cont">
      <button id="menu-btn" type="button" @click="toggleNav()">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  </header>
  <nav id="navbar" class="nav-links">
    <router-link class="items" @click="toggleNav()" to="/">Home</router-link>
    <router-link class="items" @click="toggleNav()" to="/about"
      >About</router-link
    >

    <router-link class="items" @click="toggleNav()" to="/projects"
      >Projects</router-link
    >
    <router-link class="items" @click="toggleNav()" to="/testimonials"
      >Testimonials</router-link
    >
    <router-link class="items" @click="toggleNav()" to="/contact"
      >Contact</router-link
    >

    <button
      id="close-btn"
      class="text-light"
      type="button"
      @click="toggleNav()"
    >
      <i id="font2" class="fa-solid fa-circle-xmark"></i>
    </button>
  </nav>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleNav() {
      document.querySelector(".nav-links").classList.toggle("active");
    },
  },
};
</script>
<style scoped>
#nav-cont {
  cursor: pointer;
  font-family: 'Playfair Display', serif;
}
/* #navbar{
  background-color: black;
} */
#font2 {
  color: #084c61;
  size: 40px;
}
#font1 {
  color: #084c61;
  size: 40px;
}

#close-btn {
  top: 2rem;
  right: 2rem;
  font-size: 2rem;
  position: absolute;
  border: none;
  background: transparent;
  color: 084c61;
}
#menu-btn {
  color:black;
  z-index: 90;
  font-size: 2rem;
  top: 2rem;
  right: 2rem;
  position: absolute;

  border: none;
  background: transparent;
}

.items {
  padding: 0.5rem;
  font-size: 3rem;
  list-style-type: none;
  --bs-text-opacity: 1;
  color: #084c61;
  transition: all ease-in-out 0.5s;
  text-decoration: none;
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-family: 'Playfair Display', serif;
}
.items:hover {
  color: #084c61;
}

.nav-links {
  cursor: pointer;
  z-index: 1000;
  position: fixed;
  top: -150%;
  left: 0;
  right: 0;
  height: 105vh;
  background-color: lightgray;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  transition: top 0.3s linear;
}
.nav-links.active {
  top: 0;
  display: flex;

  align-items: center;
}
@media only screen and (max-width: 600px) {
  /* #close-btn {
    margin-left: 21rem;
    margin-top: 2rem;
    font-size: 1rem;
  }
  #menu-btn {
    position: fixed;
    right: -2rem;
    font-size: 1rem;
  } */
  .items {
    font-size: 2rem;
  }
}
@media only screen and (max-width: 350px){
  body,html{
    overflow-x: hidden;
  }
  .nav-links.active {
    top: 0;
    display: flex;
    align-items: center;
    width: 20.63rem;
}
}
</style>
