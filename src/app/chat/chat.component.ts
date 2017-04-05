import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {

  public text: string;
  public errorMessage: string;
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.text = '';
  }

  send(message: string) {
    this.text += `\n${message}`;
    this.chatService.getAnswer(message).subscribe(
      (answer) => { console.log(answer); this.text += `\n${answer}`; },
      (error) => this.errorMessage = error as any);
  }
}
