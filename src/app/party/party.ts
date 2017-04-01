import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-party',
    templateUrl: 'party.html',
})

export class PartyComponent implements OnInit {
    partiesRef: FirebaseObjectObservable<any>;
    parties: any;
    isReadOnly = false;

    constructor(private route: ActivatedRoute, private af: AngularFire) {
    }

    ngOnInit() {
        this.parties = this.route.snapshot.data['parties'];
        this.partiesRef = this.af.database.object(`/application/${localStorage.getItem('applicationId')}`);
    }

    onSubmit() {
        if (!this.isReadOnly) {
            this.partiesRef.set(this.parties);
        }
    }

    save(parties: any) {
        if (!this.isReadOnly) {
            this.partiesRef.set(parties);
        }
    }

    update(parties: string) {
        if (!this.isReadOnly) {
            this.partiesRef.update({ size: parties });
        }
    }
}
