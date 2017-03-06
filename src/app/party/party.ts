import { Component } from '@angular/core';
import { AngularFire, FirebaseAuthState, FirebaseObjectObservable } from 'angularfire2';

@Component({
    selector: 'app-party',
    templateUrl: 'party.html',
})

export class PartyComponent {
    user: FirebaseObjectObservable<any>;
    userAuth: FirebaseAuthState;
    userData: any;

    constructor(private af: AngularFire) {
        this.userData = {};
    }

    ngOnInit() {
        const currentUser = localStorage.getItem('currentUser');
        this.user = this.af.database.object(`/user/${currentUser}`);
        this.user.subscribe((item) => {
            if (item.$exists()) {
                this.userData = item;
            } else {
                this.userData = {};
                const newUser = this.af.database.object(`/user/${currentUser}`);
                newUser.set(this.userData);
            }
            return item;
        });
    }

    onSubmit() {
        this.user.set(this.userData);
    }

    save(updatedUser: any) {
        this.user.set(updatedUser);
    }

    update(newSize: string) {
        this.user.update({ size: newSize });
    }
}
