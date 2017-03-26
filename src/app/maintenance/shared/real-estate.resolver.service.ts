import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Resolve } from '@angular/router';
import { AngularFire, FirebaseAuthState, FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RealEstateResolver implements Resolve<any> {

  constructor(private af: AngularFire) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> {
    const firebaseDataPath = `/application/${localStorage.getItem('applicationId')}/maintenance/real-estate`;
    console.log(firebaseDataPath);
    const data = this.af.database.object(firebaseDataPath);
    return data
      .map((realEstates) => {
        //empty database always has an empty $value property
        if (!realEstates.hasOwnProperty('$value')) {
          let realEstateKeys = Object.keys(realEstates);
          return realEstateKeys.map((realEstateKey) => {
            console.log(realEstateKey);
            return this.af.database.object(`${firebaseDataPath}/${realEstateKey}`)
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
