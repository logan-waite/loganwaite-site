import { Module } from 'vuex';
import { RootState } from '@/store/interfaces';
import type { PortfolioState } from './interfaces';
import state from './state';
import getters from './getters';

const portfolio: Module<PortfolioState, RootState> = {
  state,
  getters,
};

export default portfolio;
