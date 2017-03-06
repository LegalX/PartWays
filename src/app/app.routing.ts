import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service';
import { HomeComponent } from './home/home';
import { PageNotFoundComponent } from './page.not.found';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
