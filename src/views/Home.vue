<template>
  <div>
    <Header />
    <main>
    <div class="container">
      <h2>Building stellar <br> websites for early startups</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br> eiusmod tempor incididunt.</p>
      <div>
        <button>View our work</button>
        <p>View Pricing -></p>
      </div>
      <img src="../../public/images/first.svg" alt="IMG first">
    </div>

    <div class="projects-section">
      <h2>View our projects</h2>
      <p>View more -></p>
      <img src="../../public/images/second.svg" alt="Second IMG">
      <img src="../../public/images/third.svg" alt="Third IMG">
      <img src="../../public/images/four.jpg" alt="Four IMG">
    </div>

    <div class="features-section">
      <p>Features</p>
      <h3>Design that solves <br> problems, one product at <br> a time</h3>

      <div class="feature">
        <p>Uses Client First</p>
        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
      </div>

      <div class="feature">
        <p>Two Free Revision Round</p>
        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
      </div>

      <div class="feature">
        <img src="../../public/images/rocket.png" alt="Rocket ICON">
        <p>Template Customization</p>
        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
      </div>

      <div class="feature">
        <img src="../../public/images/comment.png" alt="Comment ICON">
        <p>24/7 Support</p>
        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
      </div>

      <div class="feature">
        <img src="../../public/images/time.png" alt="Time ICON">
        <p>Quick Delivery</p>
        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
      </div>

      <div class="feature">
        <p>Hands-on approach</p>
        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
      </div>
    </div>

    <div class="client-feedback">
      <h4>What our clients say about us</h4>
      <p>Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit sed.</p>
      <blockquote>
        "The best agency we’ve worked with so far. They <br> understand our product and are able to add new <br> features with a great focus."
        <div>
          <img src="../../public/images/roundIMG.svg" alt="Round IMG">
          <p>Jenny Wilson <br> Vice President</p>
          <button>></button>
          <button>></button>
        </div>
      </blockquote>
    </div>
  </main>
  
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.container {
  @apply mx-auto p-4;

  h2 {
    @apply text-3xl font-bold mb-4;
  }

  p {
    @apply mb-4;
  }

  button {
    @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600;
  }

  img {
    @apply mt-4;
  }
}

.projects-section {
  @apply mt-8;
}

.features-section {
  @apply mt-8;
}

.client-feedback {
  @apply mt-8;
}
</style>


    