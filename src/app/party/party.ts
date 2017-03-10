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
    user: FirebaseObjectObservable<any>;
    userData: any;
    private isReadOnly = true;

    constructor(private route: ActivatedRoute, private af: AngularFire) {
    }

    ngOnInit() {
        this.userData = this.route.snapshot.data['userData'];
        const currentUserId = localStorage.getItem('currentUserId');
        if (currentUserId === this.userData.$key) {
            this.user = this.af.database.object(`/user/${currentUserId}`);
            this.isReadOnly = false;
        }
    }

    onSubmit() {
        if (!this.isReadOnly) {
            this.user.set(this.userData);
        }
    }

    save(updatedUser: any) {
        if (!this.isReadOnly) {
            this.user.set(updatedUser);
        }
    }

    update(newSize: string) {
        if (!this.isReadOnly) {
            this.user.update({ size: newSize });
        }
    }
}
