<template>
  <section id="landing" class="p-2">
    <div class="container">
      <div class="row align-items-start">
        <div class="col">
          <div id="divv"></div>
          <h1 id="home-title">Hey, I'm Zoe Van Der Schyff</h1>
          <div class="text-effect">
            <span>Aspiring Full Stack Developer</span>
          </div>
        </div>
        <div class="col">
          <img id="img" alt="photo" src="../assets/picture1.jpg" />
        </div>
      </div>
    </div>
  </section>
  <!-- section end -->
  <section id="description">
    <h2>Contact Details</h2>
    <p>
      If you would like to get hold of me, you can contact me via these socials
    </p>

    <p><span class="fw-bold text-dark">Contact:</span>+(27)81 574 1383</p>

    <p>
      <span class="fw-bold text-dark">Email:</span>zoevanderschyff13@gmail.com
    </p>

    <p><span class="fw-bold text-dark">Github:</span>https://github.com/</p>

    <p><span class="fw-bold text-dark">Linkedin:</span></p>
  </section>
</template>
<script>
export default {};
</script>
<style>
body {
  background-color: #d7c8c1;
}
#home-title {
  font-family: "Allura", cursive;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin-top: -29rem;
}
.text-effect {
  color: #084c61;
  font-family: "Pathway Gothic One", sans-serif;
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  perspective: 700px;
}
.text-effect span {
  display: inline-block;
  transform-origin: 0 10%;
  transform-style: preserve-3d;
  animation: flip 3s infinite linear;
}
@keyframes flip {
  35% {
    transform: rotateX(70deg);
  }
  65% {
    transform: rotateX(-70deg);
  }
}
@media only screen and (max-width: 990px) {
  .text-effect {
    font-size: 90px;
  }
}
@media only screen and (max-width: 767px) {
  .text-effect {
    font-size: 65px;
  }
}
@media only screen and (max-width: 576px) {
  .text-effect {
    font-size: 50px;
  }
}
@media only screen and (max-width: 479px) {
  .text-effect {
    font-size: 38px;
    line-height: 35px;
  }
}
#landing {
  background-color: #f6f4f4;
  min-height: 100vh;
  margin: 1.6rem;
}
#img {
  margin-top: 3rem;
  height: 500px;
  width: 400px;
  border-radius: 6px;
  background: darkslategrey;
  box-shadow: 6px 6px 10px #232c33, -6px -6px 10px #232c33;
}
#divv {
  background-color: #232c33;
  height: 37rem;
  width: 0.5rem;
  margin-top: 3rem;
}
#description {
  min-height: 50vh;
}
h2 {
  font-family: "Allura", cursive;
  font-size: 3rem;
}
@media only screen and (max-width: 580px) {
  img#img {
    width: 15rem;
    height: 12rem;
  }
  #home-title {
    font-size: 2rem;

    margin-top: -32rem;
  }
  .text-effect span {
    font-size: 1.5rem;
  }
  #divv {
    height: 35rem;
    width: 0.2rem;
    margin-top: 1rem;
  }
}
</style>
