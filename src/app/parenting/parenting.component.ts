import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-parenting',
  templateUrl: './parenting.component.html',
  styleUrls: ['./parenting.component.css'],
})
export class ParentingComponent implements OnInit {
  parenting: FirebaseObjectObservable<any>;
  children: Array<FirebaseObjectObservable<any>>;
  index: number;

  constructor(private route: ActivatedRoute, private af: AngularFire) { }

  ngOnInit() {
    this.children = this.route.snapshot.data['children'];
    this.parenting = this.af.database.object(`/application/${localStorage.getItem('applicationId')}/parenting`);
  }
}
