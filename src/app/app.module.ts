import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';

import 'hammerjs';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { ApplicationComponent } from './application/application.component';
import { ApplicationResolver } from './application/application.resolver.service';
import { AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login';
import { ChildrenComponent } from './children/children.component';
import { ChildrenResolver } from './children/children.resolver.service';
import { CourtCasesComponent } from './court-cases/court-cases.component';
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
import { PartiesResolver } from './party/party.resolver.service';
import { PrintFormComponent } from './print-form/print-form.component';
import { PrintFormResolver } from './print-form/print-form.resolver.service';
import { PropertyComponent } from './property/property.component';
import { PropertyResolver } from './property/property.resolver.service';
import { RelationshipComponent } from './relationship/relationship.component';
import { RelationshipResolver } from './relationship/relationship.resolver.service';
import { PrintDirective } from './shared/print.directive';
import { StatementOfTruthComponent } from './statement-of-truth/statement-of-truth.component';
import { StatementOfTruthResolver } from './statement-of-truth/statement-of-truth.resolver.service';
import { FirebaseArrayProcessingService } from './shared/firebaseArrayProcessing.service';
import { RealEstateComponent } from './maintenance/real-estate/real-estate.component';
import { ApplicantRealEstateResolver } from './maintenance/real-estate/applicant-real-estate.resolver.service';
import { RespondentRealEstateResolver } from './maintenance/real-estate/respondent-real-estate.resolver.service';
import { MotorVehiclesComponent } from './maintenance/motor-vehicles/motor-vehicles.component';
import { RespondentMotorVehiclesResolver } from './maintenance/motor-vehicles/respondent-motor-vehicles.resolver.service';
import { ApplicantMotorVehiclesResolver } from './maintenance/motor-vehicles/applicant-motor-vehicles.resolver.service';
import { ApplicantFincancialInstitutionsResolver } from './maintenance/financial-institutions/applicant-financial-institutions.resolver.service';
import { RespondentFincancialInstitutionsResolver } from './maintenance/financial-institutions/respondent-financial-institutions.resolver.service';
import { ApplicantInterestInBusinessResolver } from './maintenance/interest-in-business/applicant-interest-in-business.resolver.service';
import { RespondentInterestInBusinessResolver } from './maintenance/interest-in-business/respondent-interest-in-business.resolver.service';
import { ApplicantInvestmentsResolver } from './maintenance/investments/applicant-investments.resolver.service';
import { RespondentInvestmentsResolver } from './maintenance/investments/respondent-investments.resolver.service';
import { ApplicantLifeInsuranceResolver } from './maintenance/life-insurance/applicant-life-insurance.resolver.service';
import { RespondentLifeInsuranceResolver } from './maintenance/life-insurance/respondent-life-insurance.resolver.service';
import { ApplicantOtherInterestResolver } from './maintenance/other-interest/applicant-other-interest.resolver.service';
import { RespondentOtherInterestResolver } from './maintenance/other-interest/respondent-other-interest.resolver.service';
import { FincancialInstitutionsComponent } from './maintenance/financial-institutions/financial-institutions.component';
import { InterestInBusinessComponent } from './maintenance/interest-in-business/interest-in-business.component';
import { InvestmentsComponent } from './maintenance/investments/investments.component';
import { LifeInsuranceComponent } from './maintenance/life-insurance/life-insurance.component';
import { OtherInterestComponent } from './maintenance/other-interest/other-interest.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyBo41ERx8-sWyLWx56WvFc-RH6-nCvpFTI',
  authDomain: 'partways-dev.firebaseapp.com',
  databaseURL: 'https://partways-dev.firebaseio.com',
  storageBucket: 'partways-dev.appspot.com',
  messagingSenderId: '1727367456',
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect,
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AppRouting,
  ],
  providers: [
    AuthGuard,
    ApplicationResolver,
    PartiesResolver,
    RelationshipResolver,
    ChildrenResolver,
    DefactoResolver,
    ConsentOrdersResolver,
    LegalAdviceResolver,
    MaintenanceResolver,
    ParentingResolver,
    PropertyResolver,
    StatementOfTruthResolver,
    PrintFormResolver,
    FirebaseArrayProcessingService,
    ApplicantRealEstateResolver,
    RespondentRealEstateResolver,
    RespondentMotorVehiclesResolver,
    ApplicantMotorVehiclesResolver,
    ApplicantFincancialInstitutionsResolver,
    RespondentFincancialInstitutionsResolver,
    ApplicantInterestInBusinessResolver,
    RespondentInterestInBusinessResolver,
    ApplicantInvestmentsResolver,
    RespondentInvestmentsResolver,
    ApplicantLifeInsuranceResolver,
    RespondentLifeInsuranceResolver,
    ApplicantOtherInterestResolver,
    RespondentOtherInterestResolver
  ],
  declarations: [
    AppComponent,
    ApplicationComponent,
    HomeComponent,
    LoginComponent,
    PartyComponent,
    PageNotFoundComponent,
    RelationshipComponent,
    CourtCasesComponent,
    ChildrenComponent,
    ParentingComponent,
    DefactoComponent,
    MaintenanceComponent,
    PropertyComponent,
    StatementOfTruthComponent,
    LegalAdviceComponent,
    GenerateConsentOrdersComponent,
    PrintFormComponent,
    PrintDirective,
    RealEstateComponent,
    MotorVehiclesComponent,
    FincancialInstitutionsComponent,
    InterestInBusinessComponent,
    InvestmentsComponent,
    LifeInsuranceComponent,
    OtherInterestComponent
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
