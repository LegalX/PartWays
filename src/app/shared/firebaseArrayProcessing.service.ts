import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseArrayProcessingService {

  constructor(
    private db: AngularFireDatabase,
  ) { }

  getArray(firebaseDataPath: string): Observable<any> | Promise<any> {
    const data = this.db.object(firebaseDataPath);
    return data
      .map((items) => {
        // empty database always has an empty $value property
        if (!items.hasOwnProperty('$value')) {
          const itemsKeys = Object.keys(items);
          return itemsKeys.map((itemKey) => {
            return this.db.object(`${firebaseDataPath}/${itemKey}`)
              .map((it) => {
                return it;
              }).first();
          });
        } else {
          return [];
        }
      }).first();
  }

  addItem(
    type: string,
    entity: string,
    applicantItems: Array<Observable<any>>,
    respondentItems: Array<Observable<any>>,
  ) {
    const path = `/application/${localStorage.getItem('applicationId')}/maintenance/${type}/${entity}`;
    const items = this.db.list(path);
    items.push({}).then((item) => {
      switch (type) {
        case 'applicant':
          applicantItems.push(this.db.object(`${path}/${item.key}`));
          break;
        case 'respondent':
          respondentItems.push(this.db.object(`${path}/${item.key}`));
          break;
        default:
          throw Error('Unknown party type. Only applicant or respondent allowed');
      }
    });
  }

  removeItem(
    id: string,
    type: string,
    applicantItems: Array<Observable<any>>,
    respondentItems: Array<Observable<any>>,
  ) {
    switch (type) {
      case 'applicant':
        applicantItems[id].remove();
        applicantItems.splice(parseInt(id, 10), 1);
        break;
      case 'respondent':
        respondentItems[id].remove();
        respondentItems.splice(parseInt(id, 10), 1);
        break;
      default:
        throw Error('Unknown party type. Only applicant or respondent allowed');
    }
  }
}
