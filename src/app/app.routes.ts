import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', loadComponent: ()=> import('./pages/home/home')  },
    { path: 'about-us', loadComponent: ()=> import('./pages/about/about')  },
];
