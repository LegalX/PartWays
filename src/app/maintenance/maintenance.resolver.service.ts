import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Resolve } from '@angular/router';
import { AngularFire, FirebaseAuthState, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

@Injectable()
export class MaintenanceResolver implements Resolve<any> {

    constructor(private af: AngularFire) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> {
        const data = this.af.database.object(`/application/${localStorage.getItem('applicationId')}/maintenance`);
        return data.map((item) => {
            return item;
        }).first();
    }
}
