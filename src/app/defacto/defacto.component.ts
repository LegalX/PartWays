import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-defacto',
  templateUrl: './defacto.component.html',
  styleUrls: ['./defacto.component.css'],
})
export class DefactoComponent implements OnInit {
  item: FirebaseObjectObservable<any>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.item = this.db.object(`/application/${localStorage.getItem('applicationId')}/defacto`);
  }

}
