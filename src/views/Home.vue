<template>
  <section id="landing" class="p-2">
  
   <div id="block">
    <div class="row">
      <div class="col">

<img id="self-image" src="https://i.postimg.cc/rs4TVfQ9/IMG-20220916-WA0045.jpg"/>
</div>
<div id="socials" class="col">
 
      <a href="https://www.linkedin.com/in/zoe-van-der-schyff-67377a248/">
        <i class="fa-brands fa-linkedin"></i>
      </a>
    
</div>

    </div>
    
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
i.fa-brands.fa-linkedin {
    margin-left: 28rem;
}
#socials{
  display: flex;
font-size: 2rem;
margin-top: 8rem;
margin-left: 30rem;
}
#info-head{
  color: white;
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  padding: 3rem;
  text-shadow: 5px 5px 10px black;
}
#pgh{
  color: white;
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  text-shadow: 2px 2px 4px black;
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
  font-size: 1.3rem;
  padding: 10px;
  width: 180px;
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
  top: 6px;
  right: -20px;
  transition: 0.5s;
  font-size: 1.5rem;
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



#self-image {
  box-shadow: 2px 1px 4px black;
    margin-top: 11rem;
    background-position: left top;
    -o-object-fit: cover;
    object-fit: cover;
    padding: 20px;
    width: 270px;
    height: 270px;
    border-radius: 50%;
    margin-bottom: 3rem;
    margin-right: -5rem;
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
    margin-left: 10rem;
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
   margin-left: 10rem;

}
 .animated-title > div.text-bottom div {
	 animation: showBottomText 0.5s;
	 animation-delay: 1.75s;
	 animation-fill-mode: forwards;
	 top: 0;
	 transform: translate(0, -100%);
}

@media only screen and (max-width: 350px){
  body, html{
    overflow-x: hidden;
  }
  .animated-title {
    width: 60vmin;
    left: 0%;
    top: 67%;
    font-size: 4rem;
}

img#self-image {
    margin-right: 0.5rem;
    margin-top: 6rem;
    width: 250px;
    height: 250px;
}
h1#info-head {
    font-size: 2rem;
}
p#pgh {
  font-size: 1rem;
    padding: 2rem;
    margin-right: 1rem;
}
#description {
   
    margin-right: -1rem;
}
button#about-btn {
    width: 100px;
    font-size: 1rem;
}
i.fa-brands.fa-linkedin {
  margin-left: -35rem;
  font-size: 1.5rem;
}
.animated-title > div.text-bottom {
    bottom: 0;
   
   
}
 #socials {
    display: flex;
    font-size: 2rem;
    margin-top: 8rem;

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
</style>
