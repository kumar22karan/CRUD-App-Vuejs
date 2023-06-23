import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.js'
import store from './store'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const app = createApp(App).use(router).use(store).use(VueSweetalert2);
app.mount('#app')

