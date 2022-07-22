<template>
  <footer id="footer">
    <!-- Footer -->
    <footer class="text-center text-lg-start bg-light text-muted">
      <!-- Section: Social media -->
      <section
        class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
      >
        <!-- Left -->
        <div class="me-5 d-none d-lg-block">
          <span>Get connected with me on social media:</span>
        </div>
        <!-- Left -->

        <!-- Right -->
        <div>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-github"></i>
          </a>
        </div>
        <!-- Right -->
      </section>
      <!-- Section: Social media -->

      <!-- Section: Links  -->
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <!-- Grid row -->
          <div class="row mt-3">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <!-- Content -->
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>Zoe Van Der Schyff
              </h6>
              <p>
                My passion for tech started when I heard about the subject of
                CAT in high school.That is when I developed an interest in
                coding and styling web pages.
              </p>
            </div>

            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"></div>

            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Links</h6>
              <router-link to="/" class="nav-link active nav-item">
                Home
              </router-link>
              <router-link to="/about" class="nav-link active nav-item">
                About
              </router-link>

              <router-link to="/projects" class="nav-link active nav-item">
                Projects
              </router-link>
              <router-link to="/testimonials" class="nav-link active nav-item">
                Testimonials
              </router-link>
              <router-link to="/contact" class="nav-link active nav-item">
                Contact
              </router-link>
            </div>

            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i class="fas fa-home me-3"></i> Mitchells Plain, Westridge,
                Cape Town
              </p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                zoevanderschyff13@gmail.com
              </p>
              <p><i class="fas fa-phone me-3"></i> + 27 81 574 1383</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Copyright -->
      <div
        class="text-center p-4"
        style="background-color: rgba(0, 0, 0, 0.05)"
      >
        © 2022 ZoeFolio:
        <a class="text-reset fw-bold">Zoe Van Der Schyff</a>
      </div>
    </footer>
    <!-- Footer -->
  </footer>
</template>
<script>
export default {};
</script>
<style>
#footer {
  /* background-color: #f6f4f4; */
  min-height: 40vh;
  margin: 1.6rem;
}
#col1 {
  font-family: "Pathway Gothic One", sans-serif;
  font-size: 25px;
}
</style>
