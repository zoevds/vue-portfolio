<template>
  <section class="hero-section">
    <div class="row">
      <h1>Testimonials</h1>
      <div class="col">
        <div class="card-grid m-4 p-3">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="card m-4 p-3"
            href="#"
          >
            <div class="card__background">
              <img id="img" class="img-fluid" v-bind:src="testimonial.img" />
            </div>
            <div class="card__content m-3 p-4">
              <p class="card__category">{{ testimonial.name }}</p>
              <h3 id="paragraph-text" class="card__heading">
                {{ testimonial.paragraph }}
              </h3>
            </div>
          </div>
        </div>
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
        {
          id: 8,
          img: "https://i.postimg.cc/yd8rWw6V/Ashton-4.jpg",
          Name: "Ashton abrahams",
          status: "Colleague",
          paragraph:
            "Zoe is an outstanding individual who always delivers and never backs down from a challenge, definitely a great addition to any company.",
        },
        {
          id: 9,
          img: "",
          Name: "Uzair Damonse",
          status: "Colleague",
          paragraph: "lorem ipsimed ur mom",
        },
      ],
    };
  },
};
</script>
<style>
.hero-section {
  align-items: flex-start;
  /* background-image: linear-gradient(15deg, #0f4667 0%, #2a6973 150%); */
  display: flex;
  min-height: 100%;
  justify-content: center;
}
#paragraph-text {
  font-size: 1rem;
}
#img {
  margin-top: 3rem;
  height: 465px;
  width: 400px;
  border-radius: 6px;
  background: darkslategrey;
  box-shadow: 3px 3px 5px #232c33, -3px -3px 5px #232c33;
}
.card-grid {
  display: grid;
  /* grid-template-columns: repeat(1, 1fr);
  grid-column-gap: var(--spacing-l);
  grid-row-gap: var(--spacing-l);
  max-width: var(--width-container); */
  width: 100%;
}
/* .card.m-4.p-3 {
  height: 31.5rem;
  width: 25rem;
} */
.card {
  list-style: none;
  position: relative;
}

.card:before {
  content: "";
  display: block;
  padding-bottom: 150%;
  width: 100%;
}

.card__background {
  background-size: cover;
  background-position: center;
  border-radius: var(--spacing-l);
  bottom: 0;
  filter: brightness(0.75) saturate(1.2) contrast(0.85);
  left: 0;
  position: absolute;
  right: 0;
  transform-origin: center;
  transform: scale(1) translateZ(0);
  transition: filter 200ms linear, transform 200ms linear;
}

.card:hover .card__background {
  transform: scale(1.05) translateZ(0);
}
.card-grid:hover .card:not(:hover) .card__background {
  filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
}

.card {
  pointer-events: auto;
}
.card-grid {
  pointer-events: none;
}
.card-grid {
  row-gap: 2rem;
}
.card__content {
  left: 0;
  position: absolute;
  top: 11rem;
  color: white;
}

.card__category {
  font-size: 2rem;

  text-transform: uppercase;
}

.card__heading {
  font-size: 1rem;
  text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
  line-height: 1.4;
  /* word-spacing: 100vw; */
}
@media (min-width: 540px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .card-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
