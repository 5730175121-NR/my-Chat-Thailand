import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat/chat.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit, OnDestroy {
  message: string;

  constructor(private chat: ChatService, private auth: AuthService) { }

  ngOnInit() {
    this.auth.reAuth();
  }

  send() {
    if (this.message.replace(/\s/g, '').length !== 0) {
      this.chat.sendMessage(this.message);
      this.message = '';
    } 
  }

  handleSubmit(event) {
    event.preventDefault();
    this.send();
  }

  ngOnDestroy() {
    this.auth.logout();
  }

}
