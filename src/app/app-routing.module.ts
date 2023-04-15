import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent,
    },
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: 'contact',
        component: ContactPageComponent
    },
    {   // es una  forma d hace una carga perezoza "lazy load"
        path: 'countries', // este import resuelve una promesa
        loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule)
    },
    {
        path: '**',
        redirectTo: 'countries/by-capital'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule { }
