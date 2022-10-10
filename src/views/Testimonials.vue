<template>
  <section>
    <div id="spot">
      
      <h1 id="testimonial-title">Testimonials</h1>
      <h2 id="subtitle">Have A look at what some people had to say about me!</h2>
     <a href="#testimonials" ><i id="downarrow" class="fa-solid fa-down-long"></i> </a>
    </div>
    <section id="testimonials">
     <div class="row"> 
       <div class="col">
        <div class="card-grid m-4 p-3">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="card m-4 p-3"
            href="#"
          >
            <div class="card__background">
              <img
                id="testimonial-img"
                class="img-fluid"
                v-bind:src="testimonial.img"
              />
            </div>
            <div class="card__content m-3 p-4">
              <p class="card__category">{{ testimonial.name }}</p>
              <h3 id="paragraph-text" class="card__heading">
              {{ testimonial.paragraph }} </h3>
            </div>
          </div>
        </div>
       </div> 
     </div>
    </section>
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
          img: "https://i.postimg.cc/mDsWVQfP/godwin-2022.jpg",
          Name: "Godwin Dzvapatsva",
          status: "Lecturer",
          paragraph:
            "Zoe grasps new concepts quickly and accepts constructive criticism and instruction concerning her work. She has good strength in HTML, CSS, Bootstrap and MySQL.  I recommend her. Godwin Dzvapatsva (Ph.D)-Head of Curriculum and Learning",
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
          img: "https://i.postimg.cc/nh4XLLLt/IMG-20220720-211835.jpg",
          Name: "Uzair Damonse",
          status: "Colleague",
          paragraph:
            "Zoë is an excellent web developer. Her personality is captivating and lights up any situation making her an asset to any project or team. ",
        },
      ],
    };
  },
//   methods:{
//   myFunction() {
//   let dots = document.getElementById("dots");
//  let  moreText = document.getElementById("more");
//  let  btnText = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less";
//     moreText.style.display = "inline";
//   }
// }
    
//   }
};
</script>
<style>
#testimonials{
  min-height: 40vh;
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(https://i.postimg.cc/BQ1R82Yz/jellyfish-g26ca00314-1920.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
#downarrow{
  font-size: 2.5rem;
  padding: 2rem;
}
#subtitle{
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
}
#paragraph-text {
  font-size: 1rem;

}
#spot{
  background-color: lightgray;
  min-height: 50vh;
  
}
#testimonial-img {
  margin-top: 3rem;
  height: 465px;
  width: 400px;
  border-radius: 6px;
  background: darkslategrey;
  box-shadow: 3px 3px 5px #232c33, -3px -3px 5px #232c33;
}
#testimonial-title {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  padding: 4rem;
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
@media only screen and (max-width: 990px) {
  #testimonial-title {
    font-size: 3rem;
  }
  .p-3 {
    padding: 1.5rem !important;
  }

  .m-4 {
    margin: 0rem !important;
  }
  #testimonial-img {
    margin-top: 3rem;
    height: 430px;
    width: 400px;
    border-radius: 2px;
    background: darkslategrey;
    box-shadow: 3px 3px 5px #232c33, -3px -3px 5px #232c33;
  }
}
@media only screen and (max-width: 350px) {
  #testimonial-title {
    font-size: 2rem;
    padding: 5rem;
}
#subtitle {
  font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    padding: 2rem;
    margin-top: -5rem;
}
#testimonial-img {
  height: 440px;
    width: 900px;
    border-radius: 4px;
   
}
.card__content {
    left: 0;
    position: absolute;
    top: 10rem;
    color: white;
}
#paragraph-text {
    font-size: 0.9rem;
    text-shadow: 8px 8px 16px black;
}
}
</style>
