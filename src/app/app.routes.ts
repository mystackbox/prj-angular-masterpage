import { Routes } from '@angular/router';
import { MasterpageComponent } from './layout/masterpage/masterpage.component';
import { HomeComponent } from './features/home/pages/home/home.component';
import { AboutUsComponent } from './features/about-us/pages/about-us/about-us.component';
import { OurServicesComponent } from './features/our-services/pages/our-services/our-services.component';
import { ContactUsComponent } from './features/contact-us/pages/contact-us/contact-us.component';

export const routes: Routes = [
     {
    path: '',
    component: MasterpageComponent, // Master page
    children: [
      { path: '', component: HomeComponent, title: 'Home' },
      { path: 'about', component: AboutUsComponent, title: 'About Us' },
      { path: 'services', component: OurServicesComponent, title: 'Our Services' },
      { path: 'contactus', component: ContactUsComponent, title: 'Contact Us' },
      // Add other routes here
    ]
  },
  { path: '**', redirectTo: '' } // Catch-all route
];