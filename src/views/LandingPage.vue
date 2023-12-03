<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero-section py-5">
      <div class="container">
        <h1>Welcome to Remainder.ly</h1>
        <p class="lead">Always being reminded.</p>
        <router-link to="/sign-up" class="btn btn-primary btn-lg">Create An Account</router-link>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section py-5">
      <div class="container">
        <h2>About Remainder.ly</h2>
        <p>A Modern Enhanced way to never forgot your daily tasks and sensitive information.</p>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services-section py-5">
      <div class="container">
        <h2>Our Services</h2>
        <p>Store Sensitive Data, Frequently done tasks and normal todos.</p>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section py-5">
      <div class="container">
        <h2>Contact Us</h2>
        <form action="submit_form.php" method="post">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control" id="name" name="name" required />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary mt-2">Submit</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  // You can include components or other options here if needed
};
</script>

<style scoped>
/* Custom styles for your landing page */
.hero-section,
.about-section,
.services-section,
.contact-section {
  background-color: #f8f9fa;
  text-align: center;
}

.container {
  width: 100%;
  max-width: 600px; /* Adjust this value as needed */
  margin: auto;
}

/* Form control customization */
.form-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-control {
  width: 100%; /* Adjust as needed */
  margin-top: 10px;
}

/* Other custom styles */
</style>
