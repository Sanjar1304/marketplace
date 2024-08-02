import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'my-avto',
    loadComponent: () => import('./pages/my-auto/my-auto.component').then(m => m.MyAutoComponent)
  },
  {
    path: 'catalog',
    loadComponent: () => import('./pages/catalog/catalog.component').then(m => m.CatalogComponent)
  },
  {
    path: 'avto-credit',
    loadComponent: () => import('./pages/avto-credit/avto-credit.component').then(m => m.AvtoCreditComponent)
  },
  {
    path: 'avto-insurance',
    loadComponent: () => import('./pages/avto-insurance/avto-insurance.component').then(m => m.AvtoInsuranceComponent)
  },
  {
    path: 'paperwork',
    loadComponent: () => import('./pages/paperwork/paperwork.component').then(m => m.PaperworkComponent)
  },
  {
    path: '**',
    redirectTo:'home'
  }
];
