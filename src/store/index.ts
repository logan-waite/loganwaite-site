import { createStore } from 'vuex';
import portfolio from './modules/portfolio';

const store = createStore({
  modules: {
    portfolio,
  },
});

export default store;
