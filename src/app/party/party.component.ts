import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-party',
    templateUrl: 'party.component.html',
})

export class PartyComponent implements OnInit {
    items: FirebaseObjectObservable<any>;

    constructor(private db: AngularFireDatabase) {
    }

    ngOnInit() {
        this.items = this.db.object(`/application/${localStorage.getItem('applicationId')}/parties`);
    }
}
