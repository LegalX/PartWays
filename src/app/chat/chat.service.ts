import { Injectable, OnInit } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatService implements OnInit {
  private baseUrl = 'https://westus.api.cognitive.microsoft.com/qnamaker/v1.0';
  private chatAiUrl: string;
  private knowledgeBaseId = '27ea9bfa-035c-4c24-8da1-182e9fcd9a46';
  private subscriptionKey = 'd168e1b7a4154035b701ccf97a18bafc'; // 'c0b1cc9178e34f66a3a5e3192c7aa128';

  constructor(private http: Http) { }

  ngOnInit() {
    this.chatAiUrl = `${this.baseUrl}/${this.knowledgeBaseId}/generateAnswer`;
  }

  getAnswer(message: string): Observable<string> {
    const headers = new Headers({
      'Ocp-Apim-Subscription-Key': this.subscriptionKey,
      'Content-Type': 'application/json',
    });
    const options = new RequestOptions({ headers });
    return this.http.post('https://westus.api.cognitive.microsoft.com/qnamaker/v1.0/knowledgebases/27ea9bfa-035c-4c24-8da1-182e9fcd9a46/generateAnswer', { question: message }, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.answer || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
