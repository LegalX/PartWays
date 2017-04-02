import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-party',
    templateUrl: 'party.component.html',
})

export class PartyComponent implements OnInit {
  items: FirebaseObjectObservable<any>;

    constructor(private af: AngularFire) {
    }

    ngOnInit() {
        this.items = this.af.database.object(`/application/${localStorage.getItem('applicationId')}/parties`);
    }
}
