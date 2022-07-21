<template>
  <section id="testimonials">
    <div class="card" style="width: 18rem">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5></h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>

      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      testimonials: [
        {
          id: 1,
          img: "https://i.postimg.cc/13VLs72w/Fatima-1.jpg",
          Name: "Fatima Galant",
          status: "Colleague",
          paragraph:
            "Zoe is a focused, goal-orientated go-getter who always puts her best into everything she does.She works twice as hard as everyone else and the effort she puts is undeniably pays off.",
        },
        {
          id: 2,
          img: "https://i.postimg.cc/JnpTbjSR/Carla-1.jpg",
          Name: "Carla Lawrence",
          status: "Colleague",
          paragraph:
            "I would like to describe Zoe as being passionate about her work. She works hard and stays consistent in all areas and pursues her goals at all costs.",
        },
        {
          id: 3,
          img: "https://i.postimg.cc/BvsNkh0q/Natheerah-3.jpg",
          Name: "Natheerah Abrahams",
          status: "Colleague",
          paragraph:
            "Zoe Van Der Schyff has been greatly contributing her efforts towards her projects and small tasks . She is never afraid to seek help when facing challenges.",
        },
        {
          id: 4,
          img: "https://i.postimg.cc/MH4dLqW4/Ashwin-3.jpg",
          Name: "Ashwin Jacobs",
          status: "Colleague",
          paragraph:
            "I would like to formally recommend Zoë Van Der Schyff for her consistent work.She has the ability to complete tasks timelessly and effectively.",
        },
        {
          id: 5,
          img: "https://i.postimg.cc/vBw13jFz/Raaid-4-1.jpg",
          Name: "Raaid Abdulatief",
          status: "Colleague",
          paragraph:
            "Zoe's passion is executed through her work. She is determined and always gives her utmost into everything she does. A joy to work with.",
        },
        {
          id: 6,
          img: "https://i.postimg.cc/BvTZQnkT/jason-v3-1.jpg",
          Name: "jason Wandrag",
          status: "Lecturer",
          paragraph: "lorem ipsimed ur mom",
        },
      ],
    };
  },
};
</script>
<style>
#testimonials {
  min-height: 100vh;
}
</style>
