import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: [],
})
export class RealEstateComponent implements OnInit {
  @Input() realEstates: any;
  items: FirebaseListObservable<any>;
  private firebaseDataPath: string = `/application/${localStorage.getItem('applicationId')}/maintenance/real-estate`;

  constructor(private af: AngularFire) {
    this.items = this.af.database.list(this.firebaseDataPath);
  }

  addItem() {
    if (confirm('Do you want to add new child?')) {
      this.items.push({}).then((item) => {
        this.realEstates.push(this.af.database.object(`${this.firebaseDataPath}/${item.key}`));
      });
    }
  }

  removeItem(id: string) {
    if (confirm('Are you sure?')) {
      this.realEstates[id].remove();
      this.realEstates.splice(parseInt(id), 1);
    }
  }

  ngOnInit() {
  }

}
