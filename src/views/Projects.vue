<template>
  <section id="projects">
    <h1 id="main-title">My Projects</h1>
    <p id="project-paragraph">Click on the image to see details</p>
    <div v-for="project in projects" :key="project.id">
      <h1 id="project-title">{{ project.name }}</h1>
      <img
        class="mb-4"
        id="project-img"
        v-bind:src="project.imgURL"
        @click="showModal(project.id)"
      />

      <section>
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
      </section>
    </div>
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
a {
  cursor: pointer;
}
.nes-dialog {
  padding: 1.5rem 2rem;
  border: none;
  /* display: flex; */
  /* align-items: center; */
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
  font-family: "Pathway Gothic One", sans-serif;
  font-size: 1.5rem;
}
#project-title {
  font-size: 2rem;
}
#modal-project-name {
  font-size: 2rem;
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
  font-family: "Allura", cursive;
  font-size: 4rem;
  color: #084c61;
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
</style>
