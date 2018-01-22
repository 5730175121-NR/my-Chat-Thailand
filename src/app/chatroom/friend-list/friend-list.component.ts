import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { ChatService } from '../../services/chat/chat.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {
  friends: User[];

  constructor(private chat: ChatService) { 
    chat.getUsers().subscribe(friends => {
      this.friends = friends;
    });
  }

  ngOnInit() {
  }

}
