<template>
  <div class="contact-us">
    <Header />
    <main class="container mx-auto p-4">
      <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            required
            class="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          <span v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</span>
        </div>

        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            required
            class="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</span>
        </div>

        <div class="mb-4">
          <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
          <input
            type="text"
            id="subject"
            v-model="formData.subject"
            required
            class="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          <span v-if="errors.subject" class="text-red-500 text-sm">{{ errors.subject }}</span>
        </div>

        <div class="mb-4">
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            v-model="formData.message"
            required
            class="mt-1 block w-full p-2 border border-gray-300 rounded"
          ></textarea>
          <span v-if="errors.message" class="text-red-500 text-sm">{{ errors.message }}</span>
        </div>

        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
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
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      errors: {},
    };
  },
  methods: {
    submitForm() {
      this.errors = {};
      if (!this.validateForm()) {
        return;
      }
      const formData = new FormData();
      formData.append('name', this.formData.name);
      formData.append('email', this.formData.email);
      formData.append('subject', this.formData.subject);
      formData.append('message', this.formData.message);

      fetch('http://localhost:3000/contact', {
        method: 'POST',
        body: formData,
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('Success:', data);
          this.formData = {
            name: '',
            email: '',
            subject: '',
            message: '',
          };
        })
        .catch(error => {
          console.error('Error:', error);
        });
    },
    validateForm() {
      let isValid = true;

      if (!this.formData.name) {
        this.errors.name = 'Name is required.';
        isValid = false;
      }

      if (!this.formData.email) {
        this.errors.email = 'Email is required.';
        isValid = false;
      }

      if (!this.formData.subject) {
        this.errors.subject = 'Subject is required.';
        isValid = false;
      }

      if (!this.formData.message) {
        this.errors.message = 'Message is required.';
        isValid = false;
      }

      return isValid;
    },
  },
};
</script>

<style scoped>
.contact-us {
  padding: 20px;
}
</style>
