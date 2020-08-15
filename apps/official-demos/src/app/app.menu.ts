import { MenuItem } from '../app/core/navigation/menu-item.interface';
import { MENU_ITEMS as PERFORMANCE_MENU_ITEMS } from './experiments/performance/performance.menu';
import { MENU_ITEMS as CD_MENU_ITEMS } from './experiments/cd/cd.menu';
import { MENU_ITEMS as PUSH_MENU_ITEMS } from './experiments/push/push.menu';
import { MENU_ITEMS as LET_MENU_ITEMS } from './experiments/let/let.menu';
import { MENU_ITEMS as MIXED_MENU_ITEMS } from './experiments/mixed/mixed.menu';
import { MENU_ITEMS as CD_OPERATORS_MENU_ITEMS } from './experiments/cd-operators/cd-operators.menu';
import { MENU_ITEMS as RX_STATE_MENU_ITEMS } from './experiments/state/rx-state.menu';
import { STRATEGIES_MENU } from './experiments/strategies/strategies.menu';
import { STATE_MENU } from './state/state.menu';
import { EXPERIMENTS_MENU_ITEMS } from './experiments/experiments.menu';

export const MENU_ITEMS: MenuItem[] = [
  ...STATE_MENU,
  ...EXPERIMENTS_MENU_ITEMS
];
