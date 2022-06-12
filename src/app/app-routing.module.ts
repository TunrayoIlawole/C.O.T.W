import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

// const appRoutes: Routes = [
//     { path: '', redirectTo: '/countries', pathMatch: 'full' },
//     { path: 'countries', loadChildren: () => import('./countries/country.module').then(m => m.CountryModule)},
//     { path: 'auth', component: AuthComponent },
//     // { path: 'countries/:id', component: CountryDetailComponent }
//     // {path: 'about', component: AboutComponent},
// ];

const routes: Routes = [
    { path: '', redirectTo: '/countries', pathMatch: 'full' },
    { path: 'about', component: AboutComponent},
    { path: 'countries', loadChildren: () => import('./countries/country.module').then(m => m.CountryModule) },
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}