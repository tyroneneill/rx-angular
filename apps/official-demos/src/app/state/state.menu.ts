import { BASIC_DEMO_MENU } from './examples/demo-basics/basic-demo.menu';
import { MenuItem } from '../core/navigation/menu-item.interface';
import { COUNTER_MENU } from './examples/dynamic-counter/counter.menu';

export const STATE_MENU: MenuItem[] = [
  {
    link: 'state',
    label: 'State',
    children: [
      {
        link: 'demo-basics',
        label: 'Basic Demo',
        children: [
          ...BASIC_DEMO_MENU
        ],
      },
      {
        link: 'counter',
        label: 'Counter',
        children: [
          ...COUNTER_MENU
        ],
      },
    ],
  }
];
