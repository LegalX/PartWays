import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parenting',
  templateUrl: './parenting.component.html',
  styleUrls: ['./parenting.component.css']
})
export class ParentingComponent implements OnInit {
  parenting: FirebaseObjectObservable<any>;
  children: Array<FirebaseObjectObservable<any>>;

  constructor(private route: ActivatedRoute, private af: AngularFire) { }


  ngOnInit() {
    this.children = this.route.snapshot.data['children'];
    this.parenting = this.af.database.object(`/parenting/dev-data`);
  }

}
