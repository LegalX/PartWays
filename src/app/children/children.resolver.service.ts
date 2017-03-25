import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Resolve } from '@angular/router';
import { AngularFire, FirebaseAuthState, FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChildrenResolver implements Resolve<any> {

  constructor(private af: AngularFire) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> {
    const firebaseDataPath = `/application/${localStorage.getItem('applicationId')}/children`;
    console.log(firebaseDataPath);
    const data = this.af.database.object(firebaseDataPath);
    return data
      .map((children) => {
        //empty database always has an empty $value property
        if (!children.hasOwnProperty('$value')) {
          let childKeys = Object.keys(children);
          return childKeys.map((childKey) => {
            console.log(childKey);
            return this.af.database.object(`${firebaseDataPath}/${childKey}`)
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
