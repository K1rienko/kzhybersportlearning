import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { createApp } from 'vue'
import App from './App.vue'
// Импортируем vue-router 
import router from './router';
// Импортируем библиотеку и компонент Font-Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faVk, faInstagram, faGithub, faTelegram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';

// Добавляем иконки в библиотеку
library.add(faVk, faInstagram, faGithub, faTelegram, faTiktok, faYoutube);
library.add(faHome, faEnvelope, faPhone, faPrint);

const app = createApp(App);
// Регистрируем FontAwesomeIcon компонент глобально
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.mount('#app');