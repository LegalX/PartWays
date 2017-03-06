import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login';
import { HomeComponent } from './home/home';
import { PageNotFoundComponent } from './page.not.found';
import { PartyComponent } from './party/party';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'Parties', component: PartyComponent, canActivate: [AuthGuard] },
    { path: '', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
