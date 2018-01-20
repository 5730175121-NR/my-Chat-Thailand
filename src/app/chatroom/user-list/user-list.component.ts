import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { ChatService } from '../../services/chat/chat.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];

  ngOnInit() {
  }

  constructor(chat: ChatService) {
    chat.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
