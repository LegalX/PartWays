import { Injectable } from '@angular/core';
import { ActivatedRoute, Resolve } from '@angular/router';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApplicationResolver implements Resolve<any> {
    application: FirebaseObjectObservable<any>;

    constructor(private route: ActivatedRoute, private db: AngularFireDatabase) { }

    resolve(): Observable<any> | Promise<any> {
        const currentUserId = localStorage.getItem('currentUserId');
        const currentUserName = localStorage.getItem('currentUserId');

        const applicationId = this.route.params['id'];
        if (applicationId) {
            this.application = this.db.object(`/application/${applicationId}`);
            return this.application.map((item) => {
                return item;
            }).first();
        } else {
            const res = this.db.list(`/application/`, {
                query: {
                    orderByChild: 'applicant/id',
                    equalTo: currentUserId,
                    limitToFirst: 1,
                },
            });
            // ToDo find application for respondent
            return res.map((item) => {
                return item[0];
            }).first();
        }
    }
}
