import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Resolve } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChildrenResolver implements Resolve<any> {

  constructor(private db: AngularFireDatabase) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> {
    const firebaseDataPath = `/application/${localStorage.getItem('applicationId')}/children`;
    const data = this.db.object(firebaseDataPath);
    return data
      .map((children) => {
        // empty database always has an empty $value property
        if (!children.hasOwnProperty('$value')) {
          const childKeys = Object.keys(children);
          return childKeys.map((childKey) => {
            return this.db.object(`${firebaseDataPath}/${childKey}`)
              .map((it) => {
                return it;
              }).first();
          });
        } else {
          return [];
        }
      }).first();
  }
}
