import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
})
export class PropertyComponent implements OnInit {
  item: FirebaseObjectObservable<any>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.item = this.db.object(`/application/${localStorage.getItem('applicationId')}/property`);
  }

}
