import { Route } from "@angular/router";

export const ADMIN_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: async () => ((await import('./dashboard')).DashboardComponent),
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
      },
      {
        path: 'products',
        loadComponent: async () => ((await import('./pages')).AdminProductsPage),
        children: [
          {
            path: '',
            loadComponent: async () => ((await import('./components')).ProductListComponent)
          }
        ],
      }
    ]
  },
]