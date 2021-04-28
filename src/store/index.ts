import { createStore, Store } from 'vuex';
import type { State } from './interfaces';
import state from './state';

const store: Store<State> = createStore({
  state,
});

export default store;
