import { Routes } from '@angular/router';
import { GridComponent } from './layout/grid/grid.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: GridComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/pages/home/home.component').then(
            (m) => m.HomeComponent
          ), // Lazy load Home
        title: 'Home',
      },

      {
        path: 'about-us',
        loadComponent: () =>
          import('./features/about-us/pages/about-us/about-us.component').then(
            (m) => m.AboutUsComponent
          ), // Lazy load about-us
        title: 'About Us',
      },

      {
        path: 'our-services',
        loadComponent: () =>
          import(
            './features/our-services/pages/our-services/our-services.component'
          ).then((m) => m.OurServicesComponent), // Lazy load our-services
        title: 'Our Services',
      },

      {
        path: 'contact-us',
        loadComponent: () =>
          import(
            './features/contact-us/pages/contact-us/contact-us.component'
          ).then((m) => m.ContactUsComponent), // Lazy load contact-us
        title: 'Contact Us',
      },

      {
        path: 'page-not-found',
        loadComponent: () =>
          import(
            './features/page-not-found/pages/page-not-found/page-not-found.component'
          ).then((m) => m.PageNotFoundComponent), // Lazy load page-not-found
        title: 'Contact Us',
      },
    ],
  },
  { path: '**', redirectTo: '/page-not-found' }, // Catch-all route
];
