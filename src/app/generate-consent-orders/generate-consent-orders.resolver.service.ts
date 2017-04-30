import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Resolve } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConsentOrdersResolver implements Resolve<any> {

    constructor(private db: AngularFireDatabase) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> {
        const data = this.db.object(`/consentOrders/dev-data`);
        return data.map((item) => {
            return item;
        }).first();
    }
}
