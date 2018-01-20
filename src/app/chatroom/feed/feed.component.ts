import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from '../../services/chat/chat.service';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../../models/chat-message.model'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges{
  feed: Observable<any[]>;

  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.feed = this.chat.getMessages().valueChanges();
  }

  ngOnChanges() {
    this.feed = this.chat.getMessages().valueChanges();
  }

}
