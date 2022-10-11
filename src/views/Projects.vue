<template>
  <section id="projects">
    <div id="bot">
      <div class="animated-title2">
  <div class="text-top2">
    <div>
      <span>This is</span>
      <span>All my projects </span>
    </div>
  </div>
  <div class="text-bottom2">
    <div>Click on the image to see details</div>
  </div>
</div>
      
    </div>
    
    <section id="project-section">
    <div v-for="project in projects" :key="project.id">
     

        <h1 id="project-title">{{ project.name }}</h1>
        <img
          class="mb-4"
          id="project-img"
          v-bind:src="project.imgURL"
          @click="showModal(project.id)"
        />
    

     
        <dialog class="nes-dialog" :id="'dialog-default' + project.id">
          <form method="dialog">
            <p class="title" id="modal-project-name">{{ project.name }}</p>
            <img id="modal-img" class="mb-4" v-bind:src="project.imgURL" />
            <p>{{ project.description }}</p>
            <button id="link-btn" type="button" class="btn btn-link">
              <a v-bind:href="project.github">
                <i class="fa-brands fa-github"></i
              ></a>
            </button>
            <button id="link-btn" type="button" class="btn btn-link">
              <a v-bind:href="project.netlify">
                <i class="fa-solid fa-link"></i
              ></a>
            </button>
            <div class="close-btn">
              <button class="btn">Close</button>
            </div>
          </form>
        </dialog>
      </div>
      <a href="#projects"><i id="anglesUp2" class="fa-solid fa-angles-up"></i></a>
      </section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          imgURL: "https://i.postimg.cc/d3HpRx3t/property-project.jpg",
          name: "Properties",
          description:
            "This is a real estate property website that i created using html ,css , bootstrap and javascript",
          github: "https://github.com/zoevds/property-project",
          netlify: "https://properties-zoevds.netlify.app",
        },
        {
          id: 2,
          imgURL: "https://i.postimg.cc/Kj9VgTQK/bootstrap-portfolio.jpg",
          name: "Previous bootstrap portfolio",
          description:
            "This is my previous portfolio using html, css and bootstrap before creating this newer portfolio with vue",
          github: "https://github.com/zoevds/Project-Portfolio",
          netlify: "https://stupendous-paprenjak-58fd86.netlify.app",
        },
        {
          id: 3,
          imgURL: "https://i.postimg.cc/TwPcjYDg/mock-portfolio.jpg",
          name: "Mock Portfolio",
          description:
            "One of my first project portfolio's i careted using html and css.",
          github: "https://github.com/zoevds/mock-portfolio",
          netlify: "https://zoevdsportfolio.netlify.app",
        },

        {
          id: 4,
          imgURL: "https://i.postimg.cc/y6mFJZ5t/restaurantly.jpg",
          name: "Restaurantly",
          description:
            "This is a restaurant website that i created using html, css , bootstrap and javascript.",
          github: "https://github.com/zoevds/restaurantly",
          netlify: "https://restaurantly-website.netlify.app",
        },
        {
          id: 5,
          imgURL: "https://i.postimg.cc/T39JCxnx/To-do-list.jpg",
          name: "To-do-list",
          description:
            "I created this to do list, to add to my list of things that i want to do, using html, css , bootstrap and javascript.",
          github: "https://github.com/zoevds/To-Do-List",
          netlify: "https://todolist-zoevds.netlify.app",
        },
        {
          id: 6,
          imgURL: "https://i.postimg.cc/6qfL4hQw/BMI-calculator.jpg",
          name: "BMI calculator",
          description:
            "This is a BMI calculator, i used html, css , bootstrap and javascript , so put in your height and weight to receive a answer.",
          github: "https://github.com/zoevds/BMI-calculator",
          netlify: "https://dreamy-muffin-086b86.netlify.app",
        },
        {
          id: 7,
          imgURL: "https://i.postimg.cc/QCvs5cY4/temperature-converter.jpg",
          name: "Temperature-converter",
          description:
            "This is a temperature converter, i created this using html, css , bootstrap and javascript.",
          github: "https://github.com/zoevds/Temperature-converter",
          netlify: "https://temp-converter-zoevds.netlify.app",
        },
        {
          id: 8,
          imgURL: "https://i.postimg.cc/52T35MmR/art-gallery.jpg",
          name: "Art Gallery",
          description:
            "I created this this art gallery website in my own time, using html , css and bootstrap",
          github: "https://github.com/zoevds/Art-gallery",
          netlify: "https://zoesartgallery.netlify.app",
        },
        {
          id: 9,
          imgURL: "https://i.postimg.cc/V6Rnhyj1/holiday-destination.jpg",
          name: "Holiday Destination",
          description:
            "This a project i created in the beginning of starting at the life choices coding academy using just html and css.",
          github: "https://github.com/zoevds/Main",
          netlify: "https://cozy-raindrop-cd7503.netlify.app",
        },
        {
          id: 10,
          imgURL: "https://i.postimg.cc/8PHgTQNX/calculator.jpg",
          name: "Calculator",
          description: "A calculator i made with html, css , and javascript",
          github: "https://github.com/zoevds/Calculator",
          netlify: "https://elaborate-cascaron-f7167b.netlify.app",
        },
      ],
    };
  },
  methods: {
    showModal(id) {
      console.log(id);
      document.getElementById("dialog-default" + id).showModal();
    },
  },
};
</script>
<style>
  #anglesUp2{
    font-size: 2rem;
    color: white;
    padding: 2rem;
  }
  #anglesUp2:hover{
  color: darkgray;
}
a {
  cursor: pointer;
}
.nes-dialog {
  padding: 1.5rem 2rem;
  border: none;
background-color: lightgray;
  position: fixed;
  top: 4%;
  left: 24%;
  width: 50rem;
  height: 40rem;
  border-radius: 2px;
}
#projects {
  min-height: 100vh;
}
#project-paragraph {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
}
#bot{
  background-color: lightgray;
    min-height: 50vh
}
#project-section{
  min-height: 40vh;
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(https://i.postimg.cc/sgSy4bjP/sea-g95e4ab511-1920.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  
}
#project-title {
  font-size: 2rem;
  color: white;
  font-family: 'Playfair Display', serif;
padding: 2rem;
}
#modal-project-name {
  font-size: 2rem;
  font-family: 'Playfair Display', serif;
}
#project-img {
  height: 350px;
  width: 600px;
  box-shadow: 3px 3px 5px #232c33, -3px -3px 5px #232c33;
  border-radius: 2px;
}
#modal-img {
  width: 100%;
}
#main-title {
  font-family: 'Playfair Display', serif;
  font-size: 4rem;
  color: #084c61;
  padding: 4rem;
}
#link-btn {
  font-size: 2rem;
}

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

.items:hover {
  color: #084c61;
}

.modal-open {
  z-index: 1000;
  position: fixed;
  top: -150%;
  height: 50rem !important;
  width: 60rem !important;
  background-color: #f6f4f4;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  transition: right 0.3s linear;
}
.modal-open.active {
  top: 0;
  display: flex;
  align-items: center;
}
/* heading animations */

@keyframes showTopText {
	 0% {
		 transform: translate3d(0, 100%, 0);
	}
	 40%, 60% {
		 transform: translate3d(0, 50%, 0);
	}
	 100% {
		 transform: translate3d(0, 0, 0);
	}
}
 @keyframes showBottomText {
	 0% {
		 transform: translate3d(0, -100%, 0);
	}
	 100% {
		 transform: translate3d(0, 0, 0);
	}
}
 .animated-title2 {
	 color: #222;
	 font-family: 'Playfair Display', serif;
	 height: 90vmin;
	 left: 50%;
	 position: absolute;
	 top: 47%;
	 transform: translate(-50%, -50%);
	 width: 100vmin;
   margin-top: -7rem;
}
 .animated-title2 > div {
	 height: 50%;
	 overflow: hidden;
	 position: absolute;
	 width: 100%;
}
 .animated-title2 > div div {
	 font-size: 7vmin;
	 padding: 2vmin 0;
	 position: absolute;
}
 .animated-title2 > div div span {
	 display: block;
   margin-left: 10rem;
}
 .animated-title2 > div.text-top2 {
  border-bottom: 0.5vmin solid #000;
    top: 0;
   margin-left: 2rem;

    
}
 .animated-title2 > div.text-top2 div {
	 animation: showTopText 1s;
	 animation-delay: 0.5s;
	 animation-fill-mode: forwards;
	 bottom: 0;
	 transform: translate(0, 100%);
}
 .animated-title2 > div.text-top2 div span:first-child {
	 color: #767676;
   font-size: 3rem; 
}
 .animated-title2 > div.text-bottom2 {
	 bottom: 0;
   margin-left: 10rem;

}
 .animated-title2 > div.text-bottom2 div {
	 animation: showBottomText 0.5s;
	 animation-delay: 1.75s;
	 animation-fill-mode: forwards;
	 top: 0;
	 transform: translate(0, -100%);
   font-size: 2rem;
}
@media only screen and (max-width: 600px) {
  .items {
    font-size: 2rem;
  }
  .nes-dialog {
    width: 25rem;
  }
  img#project-img {
    width: 20rem;
    height: 10rem;
  }
  img#modal-img {
    width: 100%;
    height: 10rem;
  }
  #project-title {
    font-size: 1rem;
  }
  #main-title {
    font-size: 3rem;
  }
  .nes-dialog {
    padding: 1.5rem 2rem;
    border: none;

    position: fixed;
    top: 4%;
    left: 5%;
    width: 50rem;
    height: 40rem;
    border-radius: 2px;
  }
}
@media only screen and (max-width: 400px){
  .animated-title2 > div.text-top2 {
    border-bottom: 0.5vmin solid #000;
    top: 0;
    margin-left: 2rem;
    width: 20rem;
}
.animated-title2 > div div span {
    display: block;
    margin-left: 5rem;
}
.animated-title2 > div.text-bottom2 {
    bottom: 0;
    margin-left: 5rem;
}
.animated-title2 > div.text-bottom2 div {
  
    font-size: 1rem;
}
.animated-title2 > div.text-top2 div span:first-child {
    color: #767676;
    font-size: 2rem;
}
.animated-title2 {
    color: #222;
    font-family: 'Playfair Display', serif;
    height: 90vmin;
    left: 50%;
    position: absolute;
    top: 47%;
    transform: translate(-50%, -50%);
    width: 100vmin;
    margin-top: -9rem;
}
dialog#dialog-default1 {
    height: 32rem;
    margin-top: 6rem;
}
dialog#dialog-default2 {
    
  height: 36.5rem;
  margin-top: 6rem;

}
dialog#dialog-default3 {
    height: 32rem;
    margin-top: 6rem;
}
dialog#dialog-default4 {
    height: 32rem;
    margin-top: 6rem;
}
dialog#dialog-default5 {
    height: 32rem;
    margin-top: 6rem;
}
dialog#dialog-default6 {
    height: 32rem;
    margin-top: 6rem;
}
dialog#dialog-default7 {
    height: 34rem;
    margin-top: 6rem;
}
dialog#dialog-default8 {
    height: 32rem;
    margin-top: 6rem;
}
dialog#dialog-default9 {
    height: 35rem;
    margin-top: 5rem;
}
dialog#dialog-default10 {
    height: 32rem;
    margin-top: 6rem;
}

}
@media only screen and (max-width: 370px){
  .animated-title2 > div.text-top2 {
    margin-left: 5rem;
    width: 12rem;
}
.animated-title2 > div.text-bottom2 div {
   
    font-size: 1.5rem;
    margin-right: 9rem;
    margin-left: rem;
}
.animated-title2 > div.text-bottom2 {
    bottom: 0;
    margin-left: 5rem;
}
.animated-title2 > div.text-top2 div span:first-child {
    color: #767676;
    font-size: 2.5rem;
}
.animated-title2 > div div span {
    display: block;
    margin-left: 0.5rem;
}
.nes-dialog {
    padding: 1.5rem 2rem;
    border: none;
    position: fixed;
    top: 4%;
    left: 5%;
    width: 19rem;
    height: 30rem;
    border-radius: 6px;
    margin-left: -0.5rem;
}

}

</style>
