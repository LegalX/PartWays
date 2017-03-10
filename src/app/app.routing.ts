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
import { RelationshipComponent } from './relationship/relationship.component';
import { RelationshipResolver } from './relationship/relationship.resolver.service';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'Parties',
        component: PartyComponent,
        canActivate: [AuthGuard],
        data: { title: 'Party' },
        resolve: {
            userData: PartyResolver,
        },
    },
    {
        path: 'Parties/:id',
        component: PartyComponent,
        canActivate: [AuthGuard],
        data: { title: 'Party' },
        resolve: {
            userData: PartyResolver,
        },
    }, {
        path: 'Application',
        component: ApplicationComponent,
        canActivate: [AuthGuard],
        data: { title: 'Application' },
        resolve: {
            applicationData: ApplicationResolver,
        },
    }, {
        path: 'respondent/:id',
        component: ApplicationComponent,
        canActivate: [AuthGuard],
        data: { title: 'Application' },
        resolve: {
            applicationData: ApplicationResolver,
        },
    }, {
        path: 'mediator/:id',
        component: ApplicationComponent,
        canActivate: [AuthGuard],
        data: { title: 'Application' },
        resolve: {
            applicationData: ApplicationResolver,
        },
    }, {
        path: 'Relationship',
        component: RelationshipComponent,
        canActivate: [AuthGuard],
        data: { title: 'Relationship' },
        resolve: {
            relationship: RelationshipResolver,
        },
    }, {
        path: '',
        component: HomeComponent,
        data: { title: 'PartWays' },
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        data: { title: 'Page Not Found' },
    },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
