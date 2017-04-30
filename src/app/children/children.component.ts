import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css'],
})
export class ChildrenComponent implements OnInit {
  items: FirebaseListObservable<any>;
  children: Array<Observable<any>>;
  private firebaseDataPath = `/application/${localStorage.getItem('applicationId')}/children`;
  index: number;

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase) {
    this.items = this.db.list(this.firebaseDataPath);
  }

  addChild() {
    const obj = new Object();
    this.items.push(obj).then((item) => {
      this.children.push(this.db.object(`${this.firebaseDataPath}/${item.key}`));
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
