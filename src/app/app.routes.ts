import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', loadComponent: () => import('./portfolio.component').then(m => m.PortfolioComponent) },
  { path: 'admin', loadComponent: () => import('./admin.component').then(m => m.AdminComponent) }
];
