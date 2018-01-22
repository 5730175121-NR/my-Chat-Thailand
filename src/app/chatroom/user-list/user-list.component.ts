import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { ChatService } from '../../services/chat/chat.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];

  selectedUser: User;

  ngOnInit() {
  }

  constructor(private chat: ChatService, private authService: AuthService) {
    chat.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  show(user: User) {
    this.selectedUser = user;
    document.getElementById('modalbtn').click();
  }

  add() {
    this.chat.createChatroom(this.selectedUser.uid);
    document.getElementById('modalbtn').click();
    console.log(this.selectedUser);
  }
}
