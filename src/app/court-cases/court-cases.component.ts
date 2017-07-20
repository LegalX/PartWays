import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-court-cases',
  templateUrl: './court-cases.component.html',
  styleUrls: ['./court-cases.component.css'],
})

export class CourtCasesComponent implements OnInit {
  item: FirebaseObjectObservable<any>;
  courtCases: Array<FirebaseObjectObservable<any>>;
  index: number;
  constructor(
    private db: AngularFireDatabase,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.item = this.db.object(`/application/${localStorage.getItem('applicationId')}/courtCases`);
    this.courtCases = this.route.snapshot.data['courtCases'];
    // console.log(this.courtCases);

  }

  removeItem(id: string) {
        this.courtCases[id].remove();
        this.courtCases.splice(parseInt(id, 10), 1);
  }

  addItem() {
    const path = `/application/${localStorage.getItem('applicationId')}/courtCases/-Kjw-OPUs7wrWzyg-yKp`;
    const items = this.db.list(path);
    items.push({}).then((item) => {
      this.courtCases.push(this.db.object(`${path}/${item.key}`));
    });
    for (let item of this.courtCases) {
      console.log(item);
    }
  }

}
