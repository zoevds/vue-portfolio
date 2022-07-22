<template>
  <section id="about" class="about">
    <!-- <div class="container"> -->
    <div class="row align-items-start">
      <div class="col">
        <h1 id="head-1">Myself</h1>
        <img id="img1" alt="zoe" src="../assets/Zoe.jpg" />
      </div>
      <div class="col align-items-start">
        <h1 id="head1">About Myself</h1>
        <div class="col-12">
          <p>
            <span class="fw-bold text-dark">FullName:</span>Zoe Van Der Schyff
          </p>

          <p>
            <span class="fw-bold text-dark">Date of birth:</span>13th April 2003
          </p>

          <p><span class="fw-bold text-dark">Age:</span>19</p>

          <p><span class="fw-bold text-dark">Gender:</span>Female</p>

          <h1 id="col-heading">My interests</h1>

          <p>
            Some of my hobbies are reading books, drawing/painting , action
            movies, soccer.I am an introverted person. I love reading.My passion
            for tech started when I heard about the subject of CAT in high
            school.That is when I developed an interest in coding and styling
            web pages.
          </p>
        </div>
        <!-- SERVICE BOXES -->
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="serviceBox">
                <h3 class="title">HTML</h3>
                <div class="service-icon">
                  <span><i class="fa-brands fa-html5"></i></span>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="serviceBox">
                <h3 class="title">CSS</h3>
                <div class="service-icon">
                  <span><i class="fa-brands fa-css3-alt"></i></span>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="serviceBox">
                <h3 class="title">BOOTSTRAP</h3>
                <div class="service-icon">
                  <span><i class="fa-brands fa-bootstrap"></i></span>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="serviceBox">
                <h3 class="title">JAVASCRIPT</h3>
                <div class="service-icon">
                  <span><i class="fa-brands fa-js"></i></span>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="serviceBox">
                <h3 class="title">MYSQL</h3>
                <div class="service-icon">
                  <span><i class="fa-solid fa-database"></i></span>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="serviceBox">
                <h3 class="title">VUE</h3>
                <div class="service-icon">
                  <span><i class="fa-brands fa-vuejs"></i></span>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="serviceBox">
                <h3 class="title">GITHUB</h3>
                <div class="service-icon">
                  <span><i class="fa-brands fa-github"></i></span>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="serviceBox">
                <h3 class="title">NODE JS</h3>
                <div class="service-icon">
                  <span><i class="fa-brands fa-node-js"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- </div> -->
  </section>
  <section id="resume">
    <div class="container">
      <div class="row">
        <h1 id="resume-title">Resume</h1>
        <div class="col-md-12">
          <div class="main-timeline">
            <div class="timeline">
              <a href="#" class="timeline-content">
                <div class="timeline-icon">
                  <i class="fa fa-rocket"></i>
                </div>
                <div class="content">
                  <h3 class="title">Matric Bachelor's Pass</h3>
                  <p class="description">
                    I started high school in 2017 and ended in 2021. I
                    matriculated in 2021 at westridge high school and passed
                    with a bachelors pass. I started doing Computer Applications
                    Technology in grade 10.
                  </p>
                </div>
              </a>
            </div>
            <div class="timeline">
              <a href="#" class="timeline-content">
                <div class="timeline-icon">
                  <i class="fa fa-globe"></i>
                </div>
                <div class="content">
                  <h3 class="title">Life Choice Academy</h3>
                  <p class="description">
                    A Bootcamp program that provides you with the core
                    fundamentals of Web Development, learning coding languages
                    such as HTML, CSS, JavaScript, and more coding techniques.
                    We are also taught interpersonal and self-development skills
                    to help us in the life outside of the academy.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style>
body {
  background-color: #d7c8c1;
}
#head-1 {
  font-family: "Allura", cursive;
  margin-bottom: 2rem;
  margin-top: 1rem;
  font-size: 4rem;
}
#about {
  background-color: #f6f4f4;
  min-height: 100vh;
  margin: 1.6rem;
}
#img1 {
  margin-top: 6rem;
  height: 400px;
  width: 300px;
  border-radius: 4px;
  box-shadow: 3px 3px 5px #232c33, -3px -3px 5px #232c33;
}
#col-heading {
  font-family: "Allura", cursive;
  font-size: 3rem;
  display: flex;
  justify-content: center;
}
#resume-title {
  font-family: "Allura", cursive;
  font-size: 4rem;
  display: flex;
  justify-content: center;
}
#head1 {
  font-family: "Allura", cursive;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  font-size: 4rem;
}

/* SERVICE BOXES */
.serviceBox {
  color: #666;
  font-family: "Poppins", sans-serif;
  text-align: center;
}
.serviceBox .title {
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0 0 30px;
  font-family: "Pathway Gothic One", sans-serif;
}
.serviceBox .service-icon {
  color: #232c33;
  font-size: 50px;
  line-height: 130px;
  height: 130px;
  width: 130px;
  margin: 0 auto 30px;
  border-radius: 4px;
  box-shadow: 6px 6px 10px #232c33, -6px -6px 10px #fff;
}
.serviceBox .description {
  color: #777;
  font-size: 13px;
  letter-spacing: 0.5px;
  line-height: 22px;
  margin: 0 10px;
}
@media only screen and (max-width: 990px) {
  .serviceBox {
    margin: 0 0 30px;
  }
}
.main-timeline {
  position: relative;
}
.main-timeline:before {
  content: "";
  height: 90%;
  width: 1px;
  border-left: 7px dotted #909090;
  transform: translatex(-50%);
  position: absolute;
  left: 50%;
  top: 60px;
}
.main-timeline .timeline {
  margin-bottom: 5px;
  padding: 20px 0;
  position: relative;
  z-index: 1;
}
.main-timeline .timeline:before,
.main-timeline .timeline:after {
  cursor: pointer;
  content: "";
  height: 25px;
  width: 25px;
  background-color: #084c61;
  border-radius: 50%;
  box-shadow: 0 0 0 7px #fff, 0 0 0 12px #909090;
  transform: translateX(-50%) translateY(-50%);
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: -1;
}
.main-timeline .timeline:after {
  cursor: pointer;
  width: 35%;
  height: 100px;
  border-radius: 0;
  left: auto;
  right: 0;
  top: 50%;
  transform: translateX(0) translateY(-50%);
  -webkit-clip-path: polygon(10% 0, 0 50%, 10% 100%, 100% 100%, 100% 0);
  clip-path: polygon(10% 0, 0 50%, 10% 100%, 100% 100%, 100% 0);
}
.main-timeline .timeline-content {
  display: block;
}
.main-timeline .timeline-content:hover {
  cursor: pointer;
  text-decoration: none;
}
.main-timeline .timeline-content:after {
  content: "";
  display: block;
  clear: both;
}
.main-timeline .content {
  cursor: pointer;
  display: inline-block;
  float: left;
  width: 40%;
  color: #909090;
  position: relative;
}
.main-timeline .description {
  cursor: pointer;
  font-size: 15px;
  letter-spacing: 1px;
  margin: 0;
}
.main-timeline .title {
  font-size: 35px;
  cursor: pointer;
  font-weight: 200;
  color: #084c61;
  text-transform: uppercase;
  margin: 0 0 5px 0;
  font-family: "Pathway Gothic One", sans-serif;
}
.timeline-icon {
  height: 130px;
  width: 130px;
  font-size: 70px;
  color: #084c61;
  text-align: center;
  line-height: 127px;
  background-color: #fff;
  border: 5px solid #084c61;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  position: absolute;
  right: 2%;
  top: 50%;
  transform: translateY(-50%);
}
.main-timeline .timeline:nth-child(even):after {
  right: auto;
  left: 0;
  transform: translateX(0) translateY(-50%) rotate(180deg);
}
.main-timeline .timeline:nth-child(even) .content {
  float: right;
}
.main-timeline .timeline:nth-child(even) .timeline-icon {
  right: auto;
  left: 2%;
}
.main-timeline .timeline:nth-child(4n + 1):after {
  background: linear-gradient(
    to right,
    #f6f4f4,
    #f6f4f4,
    #f6f4f4,
    #f6f4f4,
    #f6f4f4,
    transparent,
    #f6f4f4
  );
}
.main-timeline .timeline:nth-child(4n + 2):before {
  background-color: #084c61;
}
.main-timeline .timeline:nth-child(4n + 2):after {
  background: linear-gradient(
    to right,
    #f6f4f4,
    #f6f4f4,
    #f6f4f4,
    #f6f4f4,
    #f6f4f4,
    transparent,
    #f6f4f4
  );
}

.main-timeline .timeline:nth-child(4n + 2) .timeline-icon {
  color: #084c61;
  border-color: #084c61;
}
.main-timeline .timeline:nth-child(4n + 2) .title {
  color: #084c61;
}
.main-timeline .timeline:nth-child(4n + 3):before {
  background-color: #084c61;
}

.main-timeline .timeline:nth-child(4n + 3) .title {
  color: #084c61;
}
.main-timeline .timeline:nth-child(4n + 4):before {
  background-color: #084c61;
}
.main-timeline .timeline:nth-child(4n + 4):after {
  background: linear-gradient(
    to right,
    #f6f4f4,
    #f6f4f4,
    #f6f4f4,
    #f6f4f4,
    #f6f4f4,
    transparent,
    #f6f4f4
  );
}
.main-timeline .timeline:nth-child(4n + 4) .timeline-icon {
  color: #d7c8c1;
  border-color: #22237e;
}
.main-timeline .timeline:nth-child(4n + 4) .title {
  color: #084c61;
}
@media screen and (max-width: 990px) {
  .main-timeline:before {
    top: 75px;
  }
}
@media screen and (max-width: 767px) {
  .main-timeline:before,
  .main-timeline .timeline:before {
    display: none;
  }
  .main-timeline .timeline {
    cursor: pointer;
    padding-top: 180px;
    margin-bottom: 20px;
  }
  .main-timeline .timeline:nth-child(even):after,
  .main-timeline .timeline:after {
    cursor: pointer;
    height: 170px;
    width: 100px;
    top: 0;
    right: 50%;
    transform: translateY(0) translateX(50%);
    -webkit-clip-path: polygon(50% 100%, 100% 90%, 100% 0, 0 0, 0 90%);
    clip-path: polygon(50% 100%, 100% 90%, 100% 0, 0 0, 0 90%);
  }
  .main-timeline .timeline:nth-child(even):after {
    left: auto;
  }
  .main-timeline .timeline:nth-child(4n + 1)after {
    background: linear-gradient(
      to top,
      #01c0f7,
      #01c0f7,
      #01c0f7,
      #01c0f7,
      #01c0f7,
      transparent,
      #868686,
      #868686
    );
  }
  .main-timeline .timeline:nth-child(4n + 2):after {
    background: linear-gradient(
      to bottom,
      #f6f4f4,
      #f6f4f4,
      transparent,
      #f6f4f4,
      #f6f4f4,
      #f6f4f4,
      #f6f4f4,
      #f6f4f4
    );
  }
  .main-timeline .timeline:nth-child(4n + 3):after {
    background: linear-gradient(
      to top,
      #00b09e,
      #00b09e,
      #00b09e,
      #00b09e,
      #00b09e,
      transparent,
      #868686,
      #868686
    );
  }
  .main-timeline .timeline:nth-child(4n + 4):after {
    background: linear-gradient(
      to bottom,
      #868686,
      #868686,
      transparent,
      #22237e,
      #22237e,
      #22237e,
      #22237e,
      #22237e
    );
  }
  .main-timeline .content {
    float: none;
    width: 100%;
    text-align: center;
  }
  .main-timeline .timeline:nth-child(even) .timeline-icon,
  .main-timeline .timeline-icon {
    right: 50%;
    top: 2%;
    transform: translateX(50%) translateY(0);
  }
  .main-timeline .timeline:nth-child(even) .timeline-icon {
    left: auto;
  }
}
@-webkit-keyframes animate-positive {
  0% {
    width: 0%;
  }
}
@keyframes animate-positive {
  0% {
    width: 0%;
  }
}
@media only screen and (max-width: 990px) {
  #head-1 {
    margin-bottom: 0%;

    font-size: 3rem;
  }
  #img1 {
    margin-top: 2rem;
    height: 350px;
    width: 250px;
  }
  #head1 {
    font-size: 3rem;
  }
  .col-6 {
    margin-left: 5rem;
  }
}
</style>
