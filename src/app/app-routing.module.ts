import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/products',
  },
  {
    path: 'products',
    loadComponent: async () => (await import('./products')).ProductsPage,
  },
  {
    path: 'admin',
    loadChildren: async () =>
      (await import('./admin/admin.routes')).ADMIN_ROUTES,
  },
  {
    path: '**',
    loadComponent: async () =>
      (await import('./not-found/not-found.component')).NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
