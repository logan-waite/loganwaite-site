import { Guid } from '@/libs/types';
import { GetterTree } from 'vuex';
import { State } from './interfaces';

const getters: GetterTree<State, State> = {
  getCategoryById: (state) => (id: Guid) => state.categories.find((c) => c.id === id),
};

export default getters;
