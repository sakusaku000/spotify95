import { createApp } from 'vue'
import './tailwind.css'
import './assets/css/main.css'
import store from './store'
import App from './App.vue'

const app = createApp(App);
app.use(store);
app.mount("#app");
