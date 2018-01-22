import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';
import * as firebase from 'firebase/app';

import { ChatMessage } from '../../models/chat-message.model';

@Injectable()
export class ChatService {
  user: any;
  chatMessages: AngularFireList<any>;
  chatMessage: ChatMessage;
  userName: Observable<string>;
  profilePicture: Observable<string>;

  subUser: any;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private auth: AuthService
  ) { 
    this.afAuth.authState.subscribe(auth => {
      if(auth !== undefined && auth !== null) {
        this.user = auth;
      }
      
      this.getUser().subscribe(a => {
        this.userName = a['displayName'];
        this.profilePicture = a['profilePicture'];
      });
    });
  }

  createChatroom(uid: string) {
    let key = this.db.list('chatroom').push({
      you: uid,
      me: this.auth.currentUserId,
      messages: ''
    }).key;
    let roomInfo = {
      key: key
    }
    this.db.list('user-chatroom/' + uid).push(roomInfo);
    this.db.list('user-chatroom/' + this.auth.currentUserId).push(roomInfo);
  }

  sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();
    const email = this.user.email;
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      email: email,
      userName: this.userName,
      message: msg,
      timeSent: timestamp,
      profilePicture: this.profilePicture 
    });
  }

  getUser() {
    const userId = this.user.uid;
    const path = `/users/${userId}`;
    return this.db.object(path).valueChanges();
  }

  getUsers() {
    const path = '/onlines';
    // return this.db.list(path, ref => ref.orderByChild('status').equalTo('online')).valueChanges();
    return this.db.list(path).valueChanges();
  }

  getMessages(): AngularFireList<ChatMessage[]> {
    return this.db.list('messages', ref => ref.limitToLast(15));
  }

  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' + (now.getUTCMonth() + 1) + '/' + now.getUTCDate();
    const time = now.getUTCHours() + ':' + now.getUTCMinutes() + ':' + now.getUTCSeconds();
    return (date + ' ' + time);
  }
}
