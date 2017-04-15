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
import { ChatComponent } from './chat/chat.component';
import { ChatService } from './chat/chat.service';
import { ChildrenComponent } from './children/children.component';
import { ChildrenResolver } from './children/children.resolver.service';
import { CourtCasesComponent } from './court-cases/court-cases.component';
import { DefactoComponent } from './defacto/defacto.component';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';
import { GenerateConsentOrdersComponent } from './generate-consent-orders/generate-consent-orders.component';
import { ConsentOrdersResolver } from './generate-consent-orders/generate-consent-orders.resolver.service';
import { HomeComponent } from './home/home';
import { LegalAdviceComponent } from './legal-advice/legal-advice.component';
import { LegalAdviceResolver } from './legal-advice/legal-advice.resolver.service';
import { ApplicantCreditChargeCardsResolver } from './maintenance/credit-charge-cards/applicant-credit-charge-cards.resolver.service';
import { CreditChargeCardsComponent } from './maintenance/credit-charge-cards/credit-charge-cards.component';
import { RespondentCreditChargeCardsResolver } from './maintenance/credit-charge-cards/respondent-credit-charge-cards.resolver.service';
import { ApplicantFinancialInstitutionsResolver } from './maintenance/financial-institutions/applicant-financial-institutions.resolver.service';
import { FinancialInstitutionsComponent } from './maintenance/financial-institutions/financial-institutions.component';
import { RespondentFinancialInstitutionsResolver } from './maintenance/financial-institutions/respondent-financial-institutions.resolver.service';
import { ApplicantHirePurchaseLeaseResolver } from './maintenance/hire-purchase-lease/applicant-hire-purchase-lease.resolver.service';
import { HirePurchaseLeaseComponent } from './maintenance/hire-purchase-lease/hire-purchase-lease.component';
import { RespondentHirePurchaseLeaseResolver } from './maintenance/hire-purchase-lease/respondent-hire-purchase-lease.resolver.service';
import { ApplicantHomeMortgageResolver } from './maintenance/home-mortgage/applicant-home-mortgage.resolver.service';
import { HomeMortgageComponent } from './maintenance/home-mortgage/home-mortgage.component';
import { RespondentHomeMortgageResolver } from './maintenance/home-mortgage/respondent-home-mortgage.resolver.service';
import { ApplicantInterestInBusinessResolver } from './maintenance/interest-in-business/applicant-interest-in-business.resolver.service';
import { InterestInBusinessComponent } from './maintenance/interest-in-business/interest-in-business.component';
import { RespondentInterestInBusinessResolver } from './maintenance/interest-in-business/respondent-interest-in-business.resolver.service';
import { ApplicantInvestmentsResolver } from './maintenance/investments/applicant-investments.resolver.service';
import { InvestmentsComponent } from './maintenance/investments/investments.component';
import { RespondentInvestmentsResolver } from './maintenance/investments/respondent-investments.resolver.service';
import { ApplicantLifeInsuranceResolver } from './maintenance/life-insurance/applicant-life-insurance.resolver.service';
import { LifeInsuranceComponent } from './maintenance/life-insurance/life-insurance.component';
import { RespondentLifeInsuranceResolver } from './maintenance/life-insurance/respondent-life-insurance.resolver.service';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { MaintenanceResolver } from './maintenance/maintenance.resolver.service';
import { ApplicantMotorVehiclesResolver } from './maintenance/motor-vehicles/applicant-motor-vehicles.resolver.service';
import { MotorVehiclesComponent } from './maintenance/motor-vehicles/motor-vehicles.component';
import { RespondentMotorVehiclesResolver } from './maintenance/motor-vehicles/respondent-motor-vehicles.resolver.service';
import { ApplicantOtherInterestResolver } from './maintenance/other-interest/applicant-other-interest.resolver.service';
import { OtherInterestComponent } from './maintenance/other-interest/other-interest.component';
import { RespondentOtherInterestResolver } from './maintenance/other-interest/respondent-other-interest.resolver.service';
import { ApplicantOtherLiabilitiesResolver } from './maintenance/other-liabilities/applicant-other-liabilities.resolver.service';
import { OtherLiabilitiesComponent } from './maintenance/other-liabilities/other-liabilities.component';
import { RespondentOtherLiabilitiesResolver } from './maintenance/other-liabilities/respondent-other-liabilities.resolver.service';
import { ApplicantOtherLoansResolver } from './maintenance/other-loans/applicant-other-loans.resolver.service';
import { OtherLoansComponent } from './maintenance/other-loans/other-loans.component';
import { RespondentOtherLoansResolver } from './maintenance/other-loans/respondent-other-loans.resolver';
import { ApplicantOtherMortgageResolver } from './maintenance/other-mortgage/applicant-other-mortgage.resolver.service';
import { OtherMortgageComponent } from './maintenance/other-mortgage/other-mortgage.component';
import { RespondentOtherMortgageResolver } from './maintenance/other-mortgage/respondent-other-mortgage.resolver.service';
import { ApplicantRealEstateResolver } from './maintenance/real-estate/applicant-real-estate.resolver.service';
import { RealEstateComponent } from './maintenance/real-estate/real-estate.component';
import { RespondentRealEstateResolver } from './maintenance/real-estate/respondent-real-estate.resolver.service';
import { PageNotFoundComponent } from './page.not.found';
import { ParentingComponent } from './parenting/parenting.component';
import { ParentingResolver } from './parenting/parenting.resolver.service';
import { PartyComponent } from './party/party.component';
import { PrintFormComponent } from './print-form/print-form.component';
import { PrintFormResolver } from './print-form/print-form.resolver.service';
import { PropertyComponent } from './property/property.component';
import { PropertyResolver } from './property/property.resolver.service';
import { RelationshipComponent } from './relationship/relationship.component';
import { FirebaseArrayProcessingService } from './shared/firebaseArrayProcessing.service';
import { PrintDirective } from './shared/print.directive';
import { ValuesPipe } from './shared/values.pipe';
import { StatementOfTruthComponent } from './statement-of-truth/statement-of-truth.component';
import { StatementOfTruthResolver } from './statement-of-truth/statement-of-truth.resolver.service';

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
    MaterialModule,
    FlexLayoutModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AppRouting,
  ],
  providers: [
    AuthGuard,
    ApplicationResolver,
    ChildrenResolver,
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
    ApplicantFinancialInstitutionsResolver,
    RespondentFinancialInstitutionsResolver,
    ApplicantInterestInBusinessResolver,
    RespondentInterestInBusinessResolver,
    ApplicantInvestmentsResolver,
    RespondentInvestmentsResolver,
    ApplicantLifeInsuranceResolver,
    RespondentLifeInsuranceResolver,
    ApplicantOtherInterestResolver,
    RespondentOtherInterestResolver,
    ApplicantOtherLoansResolver,
    RespondentOtherLoansResolver,
    ApplicantOtherLiabilitiesResolver,
    RespondentOtherLiabilitiesResolver,
    ApplicantHomeMortgageResolver,
    RespondentHomeMortgageResolver,
    ApplicantOtherMortgageResolver,
    RespondentOtherMortgageResolver,
    ApplicantHirePurchaseLeaseResolver,
    RespondentHirePurchaseLeaseResolver,
    ApplicantCreditChargeCardsResolver,
    RespondentCreditChargeCardsResolver,
    ChatService,
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
    FinancialInstitutionsComponent,
    InterestInBusinessComponent,
    InvestmentsComponent,
    LifeInsuranceComponent,
    OtherInterestComponent,
    FeedbackDialogComponent,
    OtherLoansComponent,
    OtherLiabilitiesComponent,
    HomeMortgageComponent,
    OtherMortgageComponent,
    HirePurchaseLeaseComponent,
    CreditChargeCardsComponent,
    ChatComponent,
    ValuesPipe,
  ],
  entryComponents: [FeedbackDialogComponent],
  bootstrap: [AppComponent],
})

export class AppModule { }
