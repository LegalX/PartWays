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
        let currentUserId = route.params['id'];
        if (!currentUserId) {
            currentUserId = localStorage.getItem('currentUserId');
        }

        this.user = this.af.database.object(`/user/${currentUserId}`);
        return this.user.map((item) => {
            return item;
        }).first();
    }
}
