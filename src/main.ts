import { createApp } from 'vue';
import App from './App.vue';
import 'virtual:windi.css';
import router from './router/router';

const app: any = createApp(App);
app.use(router);

app.mount('#app');