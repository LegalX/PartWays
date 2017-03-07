import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-application',
    templateUrl: './application.html',
})

export class ApplicationComponent {
    application: any;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.application = this.route.snapshot.data['applicationData'];
    }
}
