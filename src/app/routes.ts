import { Routes } from '@angular/router';
import { permissionGuard } from './auth';

export const AppRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/products',
  },
  {
    path: 'products',
    loadComponent: async () => (await import('./products')).ProductsPage,
    canActivate: [permissionGuard],
    data: {
      permission: 'user',
      title: 'Products Page'
    }
  },
  {
    path: 'admin',
    loadChildren: async () =>
      (await import('./admin/admin.routes')).ADMIN_ROUTES,
    canActivate: [permissionGuard],
    data: {
      permission: 'admin'
    }
  },
  {
    path: 'login',
    loadComponent: async () => (await import('./auth/pages')).LoginPage,
    data: {
      title: 'Login'
    },
  },
  {
    path: '**',
    loadComponent: async () =>
      (await import('./not-found/not-found.component')).NotFoundComponent,
  },
];