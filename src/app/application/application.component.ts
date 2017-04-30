import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
    selector: 'app-application',
    templateUrl: './application.html',
})

export class ApplicationComponent {
    application: any;
    parties: any;

    constructor(private db: AngularFireDatabase) {
    }

    ngOnInit() {
        this.application = this.db.object(`/application/${localStorage.getItem('applicationId')}`);
        this.parties = this.db.object(`/application/${localStorage.getItem('applicationId')}/parties`);
    }
}
