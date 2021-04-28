import { uuidv4 } from '@/libs/helpers';
import type { State } from './interfaces';

const state: State = {
  categories: [
    {
      id: uuidv4(),
      name: 'Frameworks',
      icon: 'sitemap',
      widgets: [],
    },
    {
      id: uuidv4(),
      name: 'Languages',
      icon: 'code',
      widgets: [],
    },
    {
      id: uuidv4(),
      name: 'Jobs',
      icon: 'terminal',
      widgets: [],
    },
    {
      id: uuidv4(),
      name: 'Design',
      icon: 'eye',
      widgets: [],
    },
    {
      id: uuidv4(),
      name: 'Random',
      icon: 'gamepad-alt',
      widgets: [],
    },
  ],
};

export default state;
