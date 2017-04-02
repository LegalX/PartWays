import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-defacto',
  templateUrl: './defacto.component.html',
  styleUrls: ['./defacto.component.css']
})
export class DefactoComponent implements OnInit {
  item: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.item = this.af.database.object(`/application/${localStorage.getItem('applicationId')}/defacto`);
  }

}
