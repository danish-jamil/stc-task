import { Route } from '@angular/router';
import { productResolver } from './resolvers';

export const ADMIN_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: async () => (await import('./layouts')).DashboardComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
      },
      {
        path: 'products',
        loadComponent: async () => (await import('./pages')).ProductsPage,
        children: [
          {
            path: '',
            loadComponent: async () =>
              (await import('./components')).ProductListComponent,
          },
          {
            path: ':id',
            loadComponent: async () =>
              (await import('./components')).ProductEditComponent,
            resolve: { product: productResolver },
          },
        ],
      },
    ],
  },
];
