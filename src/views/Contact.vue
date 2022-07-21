<template>
  <div class="form-bg">
    <div class="container">
      <div class="row">
        <div class="col-md-offset-3 col-md-6">
          <div class="form-container">
            <div class="form-icon">
              <i class="fa fa-envelope-open"></i>
            </div>
            <form
              action="https://formspree.io/f/mrgjnqjp"
              class="form-horizontal"
            >
              <h3 class="title">Contact Me</h3>
              <div class="form-group">
                <span class="input-icon"><i class="fa fa-user"></i></span>
                <input class="form-control" type="text" placeholder="Name" />
              </div>
              <div class="form-group">
                <span class="input-icon"><i class="fa fa-envelope"></i></span>
                <input
                  class="form-control"
                  type="email"
                  placeholder="Email Address"
                />
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  rows="4"
                  cols="120"
                  placeholder="Message"
                ></textarea>
              </div>
              <button class="btn signin">
                Send Message <i class="fa fa-long-arrow-alt-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="open_grepper_editor" title="Edit & Save To Grepper"></div> -->
</template>
<script>
export default {};
</script>
<style>
.form-container {
  font-family: "Roboto", sans-serif;
  padding: 40px 40px 0 0;
  position: relative;
  display: flex;
  justify-content: center;
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
  height: 30rem;
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
  width: 110px;
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
  text-transform: capitalize;
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
</style>
