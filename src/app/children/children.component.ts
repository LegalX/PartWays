import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css'],
})
export class ChildrenComponent implements OnInit {
  items: FirebaseListObservable<any>;
  children: Array<FirebaseObjectObservable<any>>;
  private firebaseDataPath = `/application/${localStorage.getItem('applicationId')}/children`;
  index: number;

  constructor(private route: ActivatedRoute, private af: AngularFire) {
    this.items = this.af.database.list(this.firebaseDataPath);
  }

  addChild() {
    const obj = new Object();
    this.items.push(obj).then((item) => {
      this.children.push(this.af.database.object(`${this.firebaseDataPath}/${item.key}`));
    });
  }

  removeChild(id: string) {
    if (confirm('Are you sure?')) {
      this.children[id].remove();
      this.children.splice(parseInt(id, 10), 1);
    }
  }

  ngOnInit() {
    this.children = this.route.snapshot.data['children'];
  }
}
