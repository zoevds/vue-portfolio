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
   <span><button id="about-btn"><router-link id="about-router" to="/about">About Me</router-link></button></span>
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
    margin: -1rem;
}
#info-head{
  color: white;
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  padding: 3rem;
}
#pgh{
  color: white;
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
}
#about-router{
  text-decoration: none;
}
#about-btn {
  border-radius: 4px;
  background-color: lightgrey;
  border: none;
  color: black;
  text-align: center;
  font-size: 32px;
  padding: 16px;
  width: 220px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 36px;
  box-shadow: 0 10px 20px -8px rgba(0, 0, 0,.7);
}

#about-btn{
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

#about-btn:after {
  content: '»';
  position: absolute;
  opacity: 0;  
  top: 14px;
  right: -20px;
  transition: 0.5s;
}

#about-btn:hover{
  padding-right: 24px;
  padding-left:8px;
}

#about-btn:hover:after {
  opacity: 1;
  right: 10px;
}
/* 
#about-btn{
background-color: black;
color: white;
border-radius: 4px;
} */
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
  box-shadow: 2px 1px 4px black;
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

@media only screen and (max-width: 800px){
  #self-image {
    margin-top: 3.5rem;
   
    padding: 20px;
    width: 220px;
    height: 220px;
   
    margin-bottom: 3rem;
}
.animated-title > div.text-top div span:first-child {
    color: #767676;
    font-size: 1.5rem;
    margin-top: 1rem;
}
.animated-title > div div span {
    display: block;
    font-size: 1.5rem;
    margin-left: 3.5rem;
}
.animated-title > div.text-bottom div {
  margin-top:1rem;
    font-size: 1.5rem;
    margin-left: 4.5rem;
}
.animated-title > div.text-top {
    border-bottom: 0.5vmin solid #000;
    top: 0;
    width: 20rem;
    margin-left: 2.5rem;
    margin-top: 1.5rem;
}
#info-head {
    color: white;
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    padding: 2rem;
}
#pgh {
   
    font-size: 1rem;
    padding: 2rem;
}
#description {
   
    margin-right: -1rem;
}
#about-btn {
  margin-right: 3.5rem;
    font-size: 1rem;
}
}
</style>
