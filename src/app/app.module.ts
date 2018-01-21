import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { ChatFormComponent } from './chatroom/chat-form/chat-form.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { FeedComponent } from './chatroom/feed/feed.component';
import { MessageComponent } from './chatroom/feed/message/message.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './chatroom/user-list/user-list.component';
import { UserItemComponent } from './chatroom/user-list/user-item/user-item.component';

import { ChatService } from './services/chat/chat.service';
import { AuthService } from './services/auth/auth.service';

import { appRoutes } from '../routes';
import { environment } from '../environments/environment.prod';
import { FreindListComponent } from './chatroom/freind-list/freind-list.component';
import { FreindItemComponent } from './chatroom/freind-list/freind-item/freind-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatFormComponent,
    ChatroomComponent,
    FeedComponent,
    MessageComponent,
    LoginFormComponent,
    SignupFormComponent,
    NavbarComponent,
    UserListComponent,
    UserItemComponent,
    FreindListComponent,
    FreindItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AuthService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
