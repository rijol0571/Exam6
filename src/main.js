import { createApp } from 'vue'; // Vue 3 da createApp funksiyasini import qiling
import App from './App.vue';
import router from './router';

const app = createApp(App); // App komponentini yaratamiz
app.use(router); // Router ni qo'shamiz
app.mount('#app'); // Komponentni DOM ga ulaymiz

