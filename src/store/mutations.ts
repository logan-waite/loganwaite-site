import { MutationTree } from 'vuex';
import { State } from './interfaces';

const mutations: MutationTree<State> = {
  replaceCategories(state, payload) {
    state.categories = payload.categories;
  },
};

export default mutations;
