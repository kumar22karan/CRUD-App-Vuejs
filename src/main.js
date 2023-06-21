import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.js'
import store from './store'
import router from './router'



const app = createApp(App).use(router).use(store);

app.mount('#app')

