import type { GetterTree } from 'vuex';
import { RootState } from '../../interfaces';
import type { PortfolioState, PortfolioGetters } from './interfaces';

const getters: GetterTree<PortfolioState, RootState> & PortfolioGetters = {
  allProjects(state) {
    return state.projects;
  },
};

export default getters;
