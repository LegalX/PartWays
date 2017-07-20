import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Resolve } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CourtCasesResolver implements Resolve<any> {

  constructor(private db: AngularFireDatabase) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> {
    const firebaseDataPath = `/application/${localStorage.getItem('applicationId')}/courtCases`;
    const data = this.db.object(firebaseDataPath);
    return data
    .map((items) => {
        // empty database always has an empty $value property
        if (!items.hasOwnProperty('$value')) {
          const itemsKeys = Object.keys(items);
          // console.log(itemsKeys);
          return itemsKeys.map((itemKey) => {
            return this.db.object(`${firebaseDataPath}/${itemKey}`)
              .map((it) => {
                console.log(it);
                return it;
              }).first();
          });
        } else {
          return [];
        }
      }).first();
  }
}
