import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../../services/chat/chat.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() user: User;

  constructor(private chat: ChatService) { }

  ngOnInit() {

  }

  // onClick() {
  //   document.getElementById('modalbtn').click();
  // }

  // add() {
  //   this.chat.createChatroom(this.user.uid);
  //   document.getElementById('modalbtn').click();
  //   console.log(this.user);
  // }

}
