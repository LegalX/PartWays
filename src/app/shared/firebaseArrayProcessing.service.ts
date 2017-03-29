import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/first';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseArrayProcessingService {

  constructor(
    private af: AngularFire,
  ) { }

  getArray(firebaseDataPath: string): Observable<any> | Promise<any> {
    const data = this.af.database.object(firebaseDataPath);
    return data
      .map((items) => {
        // empty database always has an empty $value property
        if (!items.hasOwnProperty('$value')) {
          const itemsKeys = Object.keys(items);
          return itemsKeys.map((itemKey) => {
            console.log(itemKey);
            return this.af.database.object(`${firebaseDataPath}/${itemKey}`)
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
    applicantItems: Array<FirebaseObjectObservable<any>>,
    respondentItems: Array<FirebaseObjectObservable<any>>,
  ) {
    const path = `/application/${localStorage.getItem('applicationId')}/maintenance/${type}/${entity}`;
    const items = this.af.database.list(path);
    items.push({}).then((item) => {
      switch (type) {
        case 'applicant':
          applicantItems.push(this.af.database.object(`${path}/${item.key}`));
          break;
        case 'respondent':
          respondentItems.push(this.af.database.object(`${path}/${item.key}`));
          break;
        default:
          throw Error('Unknown party type. Only applicant or respondent allowed');
      }
    });
  }

  removeItem(
    id: string,
    type: string,
    applicantItems: Array<FirebaseObjectObservable<any>>,
    respondentItems: Array<FirebaseObjectObservable<any>>,
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
