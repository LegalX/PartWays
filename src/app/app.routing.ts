import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationComponent } from './application/application.component';
import { ApplicationResolver } from './application/application.resolver.service';
import { AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login';
import { HomeComponent } from './home/home';
import { PageNotFoundComponent } from './page.not.found';
import { PartyComponent } from './party/party';
import { PartyResolver } from './party/party.resolver.service';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'Parties',
        component: PartyComponent,
        canActivate: [AuthGuard],
        resolve: {
            userData: PartyResolver,
        },
    },
    {
        path: 'Parties/:id',
        component: PartyComponent,
        canActivate: [AuthGuard],
        resolve: {
            userData: PartyResolver,
        },
    }, {
        path: 'Application',
        component: ApplicationComponent,
        canActivate: [AuthGuard],
        resolve: {
            applicationData: ApplicationResolver,
        },
    }, { path: '', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
