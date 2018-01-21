import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat/chat.service';
import { send } from 'q';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
  message: string;

  constructor(private chat: ChatService) { }

  ngOnInit() {
  }

  send() {
    this.chat.sendMessage(this.message);
    this.message = '';
  }

  handleSubmit(event) {
    event.preventDefault();
    this.send();
  }

}
