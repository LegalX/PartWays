import { async, getTestBed, inject, TestBed } from '@angular/core/testing';
import {
  BaseRequestOptions, Headers,
  Http, HttpModule, RequestMethod, Response, ResponseOptions, XHRBackend,
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { ChatService } from './chat.service';

describe('ChatService', () => {
  let mockBackend: MockBackend;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        ChatService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
          (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
        },
      ],
    });
    mockBackend = getTestBed().get(MockBackend);
  });

  it('should exist', inject([ChatService], (service: ChatService) => {
    expect(service).toBeTruthy();
  }));

  it('should get answers', (done) => {
    let chatService: ChatService;

    getTestBed().compileComponents().then(() => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
              body: { answer: 'Sample response', score: '100' },
            },
            )));
        });

      chatService = getTestBed().get(ChatService);
      expect(chatService).toBeDefined();

      chatService.getAnswer('test').subscribe((answer: string) => {
        expect(answer).toBe('Sample response');
        done();
      });
    });
  });

});
