import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import MainPageVue from '../views/Mainpage.vue'
import PortfolioVue from '../views/Portfolio.vue'
import ServicesVue from '../views/Services.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPageVue,
    props: { msg: "Tee oma äri veebis nähtavaks" },
  },
  {
    path: '/teenused',
    name: 'Teenused',
    component: ServicesVue,
    props: { msg: 'Teenused' },
  },
  {
    path: '/tehtud-tood',
    name: 'Tehtud tööd',
    component: PortfolioVue,
    props: { msg: 'Tehtud tööd' },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;