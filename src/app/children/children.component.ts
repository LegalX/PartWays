import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css'],
})
export class ChildrenComponent implements OnInit {
  items: FirebaseListObservable<any>;
  children: Array<FirebaseObjectObservable<any>>;

  constructor(private route: ActivatedRoute, private af: AngularFire) {
    this.items = this.af.database.list(`/children/dev-data`);
  }

  addChild() {
    if (confirm('Do you want to add new child?')) {
      this.items.push({}).then((item) => {
        this.children.push(this.af.database.object(`/children/dev-data/` + item.key));
      });
    }
  }

  removeChild(id: string) {
    if (confirm('Are you sure?')) {
      this.children[id].remove();
      delete this.children[id];
    }
  }

  ngOnInit() {
    this.children = this.route.snapshot.data['children'];
  }
}
