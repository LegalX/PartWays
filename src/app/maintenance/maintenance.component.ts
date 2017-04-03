import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css'],
})
export class MaintenanceComponent implements OnInit {
  item: FirebaseObjectObservable<any>;
  applicantRealEstates: Array<FirebaseObjectObservable<any>>;
  respondentRealEstates: Array<FirebaseObjectObservable<any>>;
  applicantMotorVehicles: Array<FirebaseObjectObservable<any>>;
  respondentMotorVehicles: Array<FirebaseObjectObservable<any>>;
  applicantFinancialInstitutions: Array<FirebaseObjectObservable<any>>;
  respondentFinancialInstitutions: Array<FirebaseObjectObservable<any>>;
  applicantInterestInBusiness: Array<FirebaseObjectObservable<any>>;
  respondentInterestInBusiness: Array<FirebaseObjectObservable<any>>;
  applicantInvestments: Array<FirebaseObjectObservable<any>>;
  respondentInvestments: Array<FirebaseObjectObservable<any>>;
  applicantLifeInsurance: Array<FirebaseObjectObservable<any>>;
  respondentLifeInsurance: Array<FirebaseObjectObservable<any>>;
  applicantOtherInterest: Array<FirebaseObjectObservable<any>>;
  respondentOtherInterest: Array<FirebaseObjectObservable<any>>;
  applicantOtherLoans: Array<FirebaseObjectObservable<any>>;
  respondentOtherLoans: Array<FirebaseObjectObservable<any>>;
  applicantOtherLiabilities: Array<FirebaseObjectObservable<any>>;
  respondentOtherLiabilities: Array<FirebaseObjectObservable<any>>;
  applicantHomeMortgage: Array<FirebaseObjectObservable<any>>;
  respondentHomeMortgage: Array<FirebaseObjectObservable<any>>;
  applicantOtherMortgage: Array<FirebaseObjectObservable<any>>;
  respondentOtherMortgage: Array<FirebaseObjectObservable<any>>;
  applicantHirePurchaseLease: Array<FirebaseObjectObservable<any>>;
  respondentHirePurchaseLease: Array<FirebaseObjectObservable<any>>;
  applicantCreditChargeCards: Array<FirebaseObjectObservable<any>>;
  respondentCreditChargeCards: Array<FirebaseObjectObservable<any>>;

  constructor(private route: ActivatedRoute, private af: AngularFire) { }

  ngOnInit() {
    this.item = this.af.database.object(`/application/${localStorage.getItem('applicationId')}/maintenance`);
    this.applicantRealEstates = this.route.snapshot.data['applicantRealEstates'];
    this.respondentRealEstates = this.route.snapshot.data['respondentRealEstates'];
    this.applicantMotorVehicles = this.route.snapshot.data['applicantMotorVehicles'];
    this.respondentMotorVehicles = this.route.snapshot.data['respondentMotorVehicles'];
    this.applicantFinancialInstitutions = this.route.snapshot.data['applicantFinancialInstitutions'];
    this.respondentFinancialInstitutions = this.route.snapshot.data['respondentFinancialInstitutions'];
    this.applicantInterestInBusiness = this.route.snapshot.data['applicantInterestInBusiness'];
    this.respondentInterestInBusiness = this.route.snapshot.data['respondentInterestInBusiness'];
    this.applicantInvestments = this.route.snapshot.data['applicantInvestments'];
    this.respondentInvestments = this.route.snapshot.data['respondentInvestments'];
    this.applicantLifeInsurance = this.route.snapshot.data['applicantLifeInsurance'];
    this.respondentLifeInsurance = this.route.snapshot.data['respondentLifeInsurance'];
    this.applicantOtherInterest = this.route.snapshot.data['applicantOtherInterest'];
    this.respondentOtherInterest = this.route.snapshot.data['respondentOtherInterest'];
    this.applicantOtherLoans = this.route.snapshot.data['applicantOtherLoans'];
    this.respondentOtherLoans = this.route.snapshot.data['respondentOtherLoans'];
    this.applicantOtherLiabilities = this.route.snapshot.data['applicantOtherLiabilities'];
    this.respondentOtherLiabilities = this.route.snapshot.data['respondentOtherLiabilities'];
    this.applicantHomeMortgage = this.route.snapshot.data['applicantHomeMortgage'];
    this.respondentHomeMortgage = this.route.snapshot.data['respondentHomeMortgage'];
    this.applicantOtherMortgage = this.route.snapshot.data['applicantOtherMortgage'];
    this.respondentOtherMortgage = this.route.snapshot.data['respondentOtherMortgage'];
    this.applicantHirePurchaseLease = this.route.snapshot.data['applicantHirePurchaseLease'];
    this.respondentHirePurchaseLease = this.route.snapshot.data['respondentHirePurchaseLease'];
    this.applicantCreditChargeCards = this.route.snapshot.data['applicantCreditChargeCards'];
    this.respondentCreditChargeCards = this.route.snapshot.data['respondentCreditChargeCards'];
  }

}
