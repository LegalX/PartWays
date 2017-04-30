import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-parenting',
  templateUrl: './parenting.component.html',
  styleUrls: ['./parenting.component.css'],
})
export class ParentingComponent implements OnInit {
  parenting: FirebaseObjectObservable<any>;
  children: Array<FirebaseObjectObservable<any>>;
  index: number;

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.children = this.route.snapshot.data['children'];
    this.parenting = this.db.object(`/application/${localStorage.getItem('applicationId')}/parenting`);
  }
}
