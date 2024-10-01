import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import ContactUs from '../views/Contactus.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: ContactUs,
  },
];

const router = new Router({
  mode: 'history', // 'history' rejimida URL yo'nalishlarini to'g'ri ko'rsatadi
  routes,
});

export default router;

