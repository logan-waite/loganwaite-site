import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faCode, faEye, faGamepadAlt, faSitemap, faTerminal,
} from '@fortawesome/pro-light-svg-icons';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(faSitemap, faTerminal, faCode, faGamepadAlt, faEye);

createApp(App)
  .use(router)
  .use(store)
  .component('fa-icon', FontAwesomeIcon)
  .mount('#app');
