import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PropertyResolver implements Resolve<any> {

    constructor(private db: AngularFireDatabase) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> {
        const data = this.db.object(`/property/dev-data`);
        return data.map((item) => {
            return item;
        }).first();
    }
}
