import { getRandomInt, uuidv4 } from '@/libs/helpers';
import { ActionTree } from 'vuex';
import * as R from 'ramda';
import { Category, State, Widget } from './interfaces';

type WithId = {id: string};
type WithPosition = {position: {x: number; y: number}}

function addId<T extends WithId>(obj: T) {
  return {
    ...obj,
    id: uuidv4(),
  };
}

function addPosition<T extends WithPosition>(obj: T) {
  const x = getRandomInt(-150, 150);
  const y = getRandomInt(-150, 150);
  return {
    ...obj,
    position: { x, y },
  };
}

function updateWidgets(fn: (w: Widget) => Widget) {
  return function _updateWidgets(category: Category) {
    return {
      ...category,
      widgets: category.widgets.map(fn),
    };
  };
}

const actions: ActionTree<State, State> = {
  async getCategories({ commit }) {
    const response = await fetch('/data/categories.json');
    const categories = (await response.json() as Category[])
      .map(
        R.pipe(
          addId,
          updateWidgets(
            R.pipe(addId, addPosition),
          ),
        ),
      );
    commit('replaceCategories', { categories });
  },
};

export default actions;
