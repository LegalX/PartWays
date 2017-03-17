import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Resolve } from '@angular/router';
import { AngularFire, FirebaseAuthState, FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChildrenResolver implements Resolve<any> {

  constructor(private af: AngularFire) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> {
    const data = this.af.database.object(`/children/dev-data`);
    return data
      .map((children) => {
        let childKeys = Object.keys(children);
        return childKeys.map((childKey) => {
          return this.af.database.object(`/children/dev-data/` + childKey)
            .map((it) => {
              return it;
            }).first();
        });
      }).first()
    ;
  }
}
