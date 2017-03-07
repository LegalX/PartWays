import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Resolve } from '@angular/router';
import { AngularFire, FirebaseAuthState, FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PartyResolver implements Resolve<any> {
    user: FirebaseObjectObservable<any>;

    constructor(private af: AngularFire) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> {
        let currentUser = route.params['id'];
        if (!currentUser) {
            currentUser = localStorage.getItem('currentUser');
        }

        this.user = this.af.database.object(`/user/${currentUser}`);
        return this.user.map((item) => {
            if (item.$exists()) {
                return item;
            } else {
                const userData = {};
                const newUser = this.af.database.object(`/user/${currentUser}`);
                newUser.set(userData);
                return userData;
            }
        }).first();
    }
}
