import { createStore, Store } from 'vuex';
import type { State } from './interfaces';
import state from './state';
import actions from './actions';
import mutations from './mutations';

const store: Store<State> = createStore({
  state,
  actions,
  mutations,
});

export default store;
