import { Routes } from '@angular/router';
import { ROUTES as PERFORMANCE_ROUTES } from './experiments/performance/performance.routes';
import { ROUTES as PUSH_ROUTES } from './experiments/push/push.routes';

export const ROUTES: Routes = [
  ...PUSH_ROUTES,
  {
    path: '',
    loadChildren: () =>
      import('./experiments/push/push.module').then((mod) => mod.PushModule),
    canActivate: [],
    canActivateChild: [],
  },
  {
    path: '',
    loadChildren: () =>
      import('./experiments/mixed/mixed.module').then((mod) => mod.MixedModule),
    canActivate: [],
    canActivateChild: [],
  },
  {
    path: '',
    loadChildren: () => import('./experiments/let/let.module').then((mod) => mod.LetModule),
    canActivate: [],
    canActivateChild: [],
  },
  {
    path: '',
    loadChildren: () => import('./experiments/cd/cd.module').then((mod) => mod.CdModule),
    canActivate: [],
    canActivateChild: [],
  },
  ...PERFORMANCE_ROUTES,
  {
    path: '',
    loadChildren: () =>
      import('./experiments/irrelevant-to-test/irrelevant-to-test.module').then(
        (mod) => mod.IrrelevantToTestModule
      ),
    canActivate: [],
    canActivateChild: [],
  },
  {
    path: '',
    loadChildren: () =>
      import('./experiments/cd-operators/cd-operators.module').then(
        (mod) => mod.CdOperatorsModule
      ),
    canActivate: [],
    canActivateChild: [],
  },
  {
    path: '',
    loadChildren: () =>
      import('./experiments/state/rx-state.module').then((mod) => mod.RxStateModule),
    canActivate: [],
    canActivateChild: [],
  },
  {
    path: 'strategies',
    loadChildren: () =>
      import('./experiments/strategies/strategies.module').then((m) => m.StrategiesModule),
  },
];
