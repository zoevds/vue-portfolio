<template>
  <div class="form-bg">
    <div id="blank">
      <h1 id="contactMainHeading">Contact Info</h1>
      <h2 id="paragraphInfo">To get in contact with me , pop me a email or feel free to call me regarding business.
        Connect with me via LinkedIn
      </h2>
      <div class="row">
<div class="col">

  <p id="email-info"><i id="iconId" class="fa-solid fa-envelope"></i>Email: zoevanderschyff13@gmail.com</p>
</div>
<div class="col">

  <p id="phone-info"><i id="iconId" class="fa-solid fa-phone"></i>cellphone: (+27) 81 574 1383</p>
</div>
      </div>
    </div>
    <section id="contact-sect">
    <div class="container">
      <div class="row">
        <div class="col-md-offset-3 col-md-6">
          <h1 id="contact-title">Contact Me</h1>
          <div class="form-container">
            <div class="form-icon">
              <i class="fa fa-envelope-open"></i>
            </div>
            <form
              action="https://formspree.io/f/mrgjnqjp"
              method="post"
              class="form-horizontal"
            >
              <h3 class="title">Contact Me</h3>
              <div class="form-group">
                <span class="input-icon"><i class="fa fa-user"></i></span>
                <input
                  class="form-control"
                  type="text"
                  name="FullName"
                  placeholder="FullName"
                />
              </div>
              <div class="form-group">
                <span class="input-icon"><i class="fa fa-envelope"></i></span>
                <input
                  class="form-control"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  rows="4"
                  cols="120"
                  name="message"
                  placeholder="Message"
                ></textarea>
              </div>
              <button class="btn signin">
                Send Message <i class="fa fa-long-arrow-alt-right"></i>
              </button>
            </form>
          </div>
        </div>
        <div class="col-md-offset-3 col-md-6">
          <h1 id="map-title">Location</h1>
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.267419708809!2d18.490509915034536!3d-33.98566428062407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc433bedd50e81%3A0x9c746d268c8e0ad9!2sLife%20Choices!5e0!3m2!1sen!2sza!4v1658399226899!5m2!1sen!2sza"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
 
</template>
<script>
export default {};
</script>
<style>
  #contactMainHeading{
    font-family: 'Playfair Display', serif;
    text-shadow: 2px 2px 4px black;
    font-size: 3rem;
  }
  #paragraphInfo{
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    padding: 2rem;
    text-shadow: 2px 2px 4px black;
  }
  #iconId{
    padding: 1rem;
    font-size: 2rem;
  }
  #email-info,#phone-info{
    font-size: 1.3rem;
    margin-top: 2rem;
    /* padding: 2rem; */
  }
  #contact-sect{
    min-height: 40vh;
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(https://i.postimg.cc/2SP4WH91/jellyfish-g248e9c418-1920.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  }
  #blank {
  background-color: lightgray;
  min-height: 50vh;
  font-family: 'Playfair Display', serif;
  padding: 3rem;
  font-size: 4rem;
}
.map-container {
  widows: 100%;
}
iframe {
  width: 90%;
}

.form-container {
  font-family: "Roboto", sans-serif;
  /* padding: 40px 40px 0 0; */
  position: relative;
  display: flex;
  justify-content: center;
}
.col-md-offset-3.col-md-6 {
  margin-top: 4rem;
}
.form-container .form-icon {
  color: #084c61;
  background-color: #fff;
  font-size: 40px;
  text-align: center;
  line-height: 80px;
  height: 80px;
  width: 80px;
  border: 3px solid #084c61;
  border-radius: 50% 50% 50% 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}
.form-container .form-horizontal {
  background: linear-gradient(#e7e7e7 25px, rgba(255, 255, 255, 0.97) 25px);
  padding: 40px 20px 20px;
  box-shadow: 0 0 20px -5px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  width: 58.5rem;
  height: 28rem;
  /* margin-top: 3rem; */
}
#contact-title,#map-title {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: white;
}
.form-container .title {
  color: #b5b5b5;
  font-size: 27px;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  margin: 0 0 20px;
}
.form-container .title:after {
  content: "";
  background-color: #084c61;
  height: 3px;
  width: 595px;
  margin: 10px 0 0;
  display: block;
  clear: both;
}
.form-horizontal .form-group {
  background-color: rgba(255, 255, 255, 0.15);
  margin: 0 0 15px;
  border-bottom: 2px solid #e7e7e7;
}
.form-horizontal .input-icon {
  color: #b5b5b5;
  font-size: 20px;
  text-align: center;
  line-height: 35px;
  height: 35px;
  width: 30px;
  margin: 0 0 0 4px;
  vertical-align: top;
  display: inline-block;
}
.form-horizontal .form-control {
  color: #222;
  background-color: transparent;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 1px;
  width: calc(100% - 40px);
  height: 33px;
  padding: 3px 10px 0 0;
  box-shadow: none;
  border: none;
  border-radius: 0;
  display: inline-block;
  transition: all 0.3s;
}
.form-horizontal textarea.form-control {
  height: auto;
  width: 100%;
}
.form-horizontal .form-control:focus {
  box-shadow: none;
  border: none;
}
.form-horizontal .form-control::placeholder {
  color: #b5b5b5;
  font-size: 15px;
  font-weight: 400;
  /* text-transform: capitalize; */
}
.form-horizontal .btn {
  color: #d1d1d1;
  background-color: #fff;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 10px 15px 7px 20px;
  margin: 0 auto;
  border: 2px solid #e7e7e7;
  border-radius: 20px;
  display: block;
  transition: all 0.3s ease 0s;
}
.form-horizontal .btn:hover,
.form-horizontal .btn:focus {
  color: #084c61;
  background-color: #fff;
  border: 2px solid #084c61;
}
.form-horizontal .btn i {
  transition: all 0.3s ease 0s;
}
.form-horizontal .btn:hover i {
  color: #084c61;
  transform: translateX(3px);
}
/* @media (min-width: 768px) .col-md-6 {
  flex: 0 0 auto;
  width: 50%;
  margin-top: 3rem;
} */
@media only screen and (max-width: 400px){
  h1#contactMainHeading {
    font-size: 2rem;
    padding: 2rem;
}
#paragraphInfo {
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    padding: 1rem;
    text-shadow: -1px -1px 2px black;
    margin-top: -1rem;
}
p#email-info {
    font-size: 1rem;

    margin-top: -1rem;
}
p#phone-info {
    font-size: 1rem;
    margin-top: -2rem;
}

#iconId {
    padding: 1rem;
    font-size: 1rem;
}
.form-container .form-horizontal {

    width: 20rem;
    height: 28rem;

  
}
.form-container .title:after {
    
    width: 275px;
  
}
.form-container .form-icon {
   
  font-size: 25px;
  height: 70px;
    width: 70px;
}
h1#contact-title {
    padding: 2rem;
    margin-top: -4rem;
}
h1#map-title {
    padding: 2rem;
    margin-top: -4rem;
}
}
@media only screen and (max-width: 350px) {
  .form-container .form-horizontal {
    width: 18.5rem;
    height: 25rem;
    /* margin-top: 3rem; */
  }
  .form-container .form-icon {
    font-size: 20px;

    line-height: 40px;
    height: 50px;
    width: 50px;

    right: 2rem;
  }
  .col-md-offset-3.col-md-6 {
    margin-top: 2rem;
  }
  .form-container .title:after {
    width: 254px;
  }
  iframe {
    width: 85%;
    height: 25rem;
  }
  #contactMainHeading {
    font-family: 'Playfair Display', serif;
    text-shadow: 2px 2px 4px black;
    font-size: 2rem;
    padding: 1rem;
}
#paragraphInfo {
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    padding: 1rem;
    /* text-shadow: 2px 2px 4px black; */
}
#email-info, #phone-info {
    font-size: 1rem;
    margin-top: 1rem;
    /* padding: 2rem; */
}


}
</style>
