import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import MainPageVue from '../views/Mainpage.vue'
import PortfolioVue from '../views/Portfolio.vue'
import ServicesVue from '../views/Services.vue'
import PortfolioDetailsVue from '../views/PortfolioDetails.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPageVue,
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
  },
  {
    path: '/tehtud-tood/:jobId',
    name: 'JobDetails',
    component: PortfolioDetailsVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  const base = router.options.history.base;
  (document as any).baseURI = base + (base.endsWith('/') ? '' : '/');
  next();
});

export default router;