import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationComponent } from './application/application.component';
import { ApplicationResolver } from './application/application.resolver.service';
import { AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login';
import { ChildrenComponent } from './children/children.component';
import { ChildrenResolver } from './children/children.resolver.service';
import { CourtCasesComponent } from './court-cases/court-cases.component';
import { CourtCasesResolver } from './court-cases/court-cases.resolver.service';
import { DefactoComponent } from './defacto/defacto.component';
import { DefactoResolver } from './defacto/defacto.resolver.service';
import { GenerateConsentOrdersComponent } from './generate-consent-orders/generate-consent-orders.component';
import { ConsentOrdersResolver } from './generate-consent-orders/generate-consent-orders.resolver.service';
import { HomeComponent } from './home/home';
import { LegalAdviceComponent } from './legal-advice/legal-advice.component';
import { LegalAdviceResolver } from './legal-advice/legal-advice.resolver.service';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { MaintenanceResolver } from './maintenance/maintenance.resolver.service';
import { PageNotFoundComponent } from './page.not.found';
import { ParentingComponent } from './parenting/parenting.component';
import { ParentingResolver } from './parenting/parenting.resolver.service';
import { PartyComponent } from './party/party';
import { PartyResolver } from './party/party.resolver.service';
import { PrintFormComponent } from './print-form/print-form.component';
import { PropertyComponent } from './property/property.component';
import { PropertyResolver } from './property/property.resolver.service';
import { RelationshipComponent } from './relationship/relationship.component';
import { RelationshipResolver } from './relationship/relationship.resolver.service';
import { StatementOfTruthComponent } from './statement-of-truth/statement-of-truth.component';
import { StatementOfTruthResolver } from './statement-of-truth/statement-of-truth.resolver.service';

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
        path: 'CourtCases',
        component: CourtCasesComponent,
        canActivate: [AuthGuard],
        data: { title: 'Court Cases' },
        resolve: {
            relationship: CourtCasesResolver,
        },
    }, {
        path: 'Children',
        component: ChildrenComponent,
        canActivate: [AuthGuard],
        data: { title: 'Children' },
        resolve: {
            relationship: ChildrenResolver,
        },
    }, {
        path: 'Defacto',
        component: DefactoComponent,
        canActivate: [AuthGuard],
        data: { title: 'Defacto' },
        resolve: {
            relationship: DefactoResolver,
        },
    }, {
        path: 'Property',
        component: PropertyComponent,
        canActivate: [AuthGuard],
        data: { title: 'Property' },
        resolve: {
            relationship: PropertyResolver,
        },
    }, {
        path: 'LegalAdvice',
        component: LegalAdviceComponent,
        canActivate: [AuthGuard],
        data: { title: 'Legal Advice' },
    }, {
        path: 'ConsentOrders',
        component: PrintFormComponent,
        canActivate: [AuthGuard],
        data: { title: 'Consent Orders' },
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
