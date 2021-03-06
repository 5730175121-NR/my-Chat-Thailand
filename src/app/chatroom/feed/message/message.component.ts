import { Component, OnInit, Input} from '@angular/core';
import { ChatService } from '../../../services/chat/chat.service';
import { AuthService } from '../../../services/auth/auth.service';
import { ChatMessage } from '../../../models/chat-message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit{
  @Input() chatMessage: ChatMessage;

  userEmail: string;
  userName: string;
  messageContent: string;
  timeStamp: Date = new Date();
  isOwnMessage: boolean;
  ownEmail: string;
  profilePicture: string;

  constructor(private auth: AuthService) {}

  ngOnInit(chatMessage = this.chatMessage) {
    this.messageContent = chatMessage.message;
    this.timeStamp = chatMessage.timeSent;
    this.userEmail = chatMessage.email;
    this.userName = chatMessage.userName;
    this.profilePicture = chatMessage.profilePicture;

    this.ownEmail = this.auth.userEmail;
    this.isOwnMessage = this.ownEmail === this.userEmail;
  }
}
