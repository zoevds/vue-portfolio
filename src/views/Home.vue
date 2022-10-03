<template>
  <section id="landing" class="p-2">
  
   <div id="block">
    <img id="self-image" src="https://i.postimg.cc/rs4TVfQ9/IMG-20220916-WA0045.jpg"/>
    
   </div>
  
   <div class="animated-title">
  <div class="text-top">
    <div>
      <span>Hi ,</span>
      <span>My Name is </span>
    </div>
  </div>
  <div class="text-bottom">
    <div>Zoe Van Der Schyff</div>
  </div>
</div>

 
   
  </section>
  <!-- section end -->
  <section id="description">
 <h1 id="info-head">Description</h1>
 <p id="pgh"> This is my digital portfolio, if you are interested to know more about me,
  go to
   <span><button id="about-btn"><router-link to="/about">About Me</router-link></button></span>
 </p>
  </section>
</template>
<script>
export default {};
</script>
<style>


/* .words {
  color: white;
  font-size: 0;
  line-height: 1.5;
}

.words span {
  font-size: 5rem;
  display: inline-block;
  animation: move 3s ease-in-out infinite;
} */
#block{
  min-height: 70vh;
    background-color: lightgrey;
    margin: -1em;
}
#info-head{
  color: white;
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
}
#pgh{
  color: white;
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
}

#about-btn{
background-color: black;
color: white;
border-radius: 4px;
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

#self-image {
 
margin-top: 5rem;
  background-position: left top;
object-fit:cover;
  padding: 20px;
  width: 270px;
  height: 270px;
  border-radius: 50%;
  margin-bottom: 3rem;
}

#description {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(https://i.postimg.cc/SRPBH38r/plane-g381b8319d-1920.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  min-height: 60vh;
 
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

}
/* name animations */

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
 .animated-title {
	 color: #222;
	 font-family: 'Playfair Display', serif;
	 height: 90vmin;
	 left: 50%;
	 position: absolute;
	 top: 47%;
	 transform: translate(-50%, -50%);
	 width: 100vmin;
}
 .animated-title > div {
	 height: 50%;
	 overflow: hidden;
	 position: absolute;
	 width: 100%;
}
 .animated-title > div div {
	 font-size: 7vmin;
	 padding: 2vmin 0;
	 position: absolute;
}
 .animated-title > div div span {
	 display: block;
}
 .animated-title > div.text-top {
	 border-bottom: 0.5vmin solid #000;
	 top: 0;
}
 .animated-title > div.text-top div {
	 animation: showTopText 1s;
	 animation-delay: 0.5s;
	 animation-fill-mode: forwards;
	 bottom: 0;
	 transform: translate(0, 100%);
}
 .animated-title > div.text-top div span:first-child {
	 color: #767676;
}
 .animated-title > div.text-bottom {
	 bottom: 0;
}
 .animated-title > div.text-bottom div {
	 animation: showBottomText 0.5s;
	 animation-delay: 1.75s;
	 animation-fill-mode: forwards;
	 top: 0;
	 transform: translate(0, -100%);
}
/* @keyframes move {
  0% {
    transform: translate(-30%, 0);
  }
  50% {
    text-shadow: 0 25px 50px rgba(0, 0, 0, 0.75);
  }
  100% {
    transform: translate(30%, 0);
  }
}

.words span:nth-child(2) {
  animation-delay: 0.5s;
}

.words span:nth-child(3) {
  animation-delay: 1s;
}

.words span:nth-child(4) {
  animation-delay: 1.5s;
}

.words span:nth-child(5) {
  animation-delay: 2s;
}

.words span:nth-child(6) {
  animation-delay: 2.5s;
}

.words span:nth-child(7) {
  animation-delay: 3s;
} */
</style>
