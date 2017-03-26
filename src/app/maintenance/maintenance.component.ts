import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {
  item: FirebaseObjectObservable<any>;
  realEstates: Array<FirebaseObjectObservable<any>>;

  constructor(private route: ActivatedRoute, private af: AngularFire) { }

  ngOnInit() {
    this.item = this.af.database.object(`/application/${localStorage.getItem('applicationId')}/maintenance`);
    this.realEstates = this.route.snapshot.data['realEstates'];
    console.log(this.realEstates);
  }

}
