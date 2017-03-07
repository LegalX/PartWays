import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { AngularFire, FirebaseAuthState, FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApplicationResolver implements Resolve<any> {
    application: FirebaseObjectObservable<any>;

    constructor(private af: AngularFire) { }

    resolve(): Observable<any> | Promise<any> {
        this.application = this.af.database.object(`/application/test`);
        return this.application.map((item) => {
            return item;
        }).first();
    }
}
