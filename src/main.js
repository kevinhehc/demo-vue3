import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

let app = createApp(App).mount('#app');
console.log(app.$el);
