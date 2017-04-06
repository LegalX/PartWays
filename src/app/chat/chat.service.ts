import { Injectable, OnInit } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatService implements OnInit {
  private baseUrl = 'https://westus.api.cognitive.microsoft.com/qnamaker/v1.0';
  private chatAiUrl: string;
  private knowledgeBaseId = '9238af87-221d-4bcd-b66b-b3d4b8a8f561';
  private subscriptionKey = 'c0b1cc9178e34f66a3a5e3192c7aa128';

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
    return this.http.post('https://westus.api.cognitive.microsoft.com/qnamaker/v1.0/knowledgebases/9238af87-221d-4bcd-b66b-b3d4b8a8f561/generateAnswer', { question: message }, options)
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
