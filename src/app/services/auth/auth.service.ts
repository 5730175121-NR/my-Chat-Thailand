import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user.model';
import { error } from 'selenium-webdriver';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private authState: any;
  private email: string;
  private onlineKey: string;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) { 
    this.user = afAuth.authState;
  }

  get userEmail() {
    return this.email;
  }

  reAuth() {
    firebase.auth().onAuthStateChanged( (user) => {
      if(user) {
        this.authState = user;
        this.email = user.email;
      } else {
        this.router.navigate(['login']);
      }
    });
  }

  authUser() {
    return this.user;
  }

  get currentUserId(): string {
    return this.authState !== null ? this.authState.uid : '';
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        this.email = user.email;
        this.router.navigate(['chat']);
        this.setOnlineUser();
      });
  }

  logout() {
    // this.setOfflineUser()
    //   .then((setOfflineUser) => {
    //     this.setUserStatus('offline')
    //       .then((signOut) => {
    //         this.afAuth.auth.signOut()
    //           .then((user) => {
    //           console.log('logout successful!!!')
    //           this.router.navigate(['login']);
    //       })
    //       .catch(error => console.log(error));
    //     });
    //   });
    this.setOfflineUser();
    this.afAuth.auth.signOut()
      .then((signout) => {
        this.router.navigate(['login']);
      })
      .catch(error => console.log(error));
  }

  signUp(email: string, password: string, displayName: string, gender: string, age: number) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        this.setUserData(email, displayName, 'online', gender, age)
          .then((success) => {
            this.router.navigate(['chat']);
          });
      }).catch(error => console.log(error));
  }

  setUserData(email: string, displayName: string, status: string, gender: string, age: number) {
    const path = `users/${this.currentUserId}`;
    const data = {
      uid: this.currentUserId,
      email: email,
      displayName: displayName,
      profilePicture: '',
      status: status,
      gender: gender,
      age: age,
    }
    return this.db.object(path).update(data);
  }

  setOnlineUser() {
    const path = `/users/${this.currentUserId}`;
    this.db.object(path).valueChanges().subscribe((user) => {
      this.onlineKey = this.db.list('onlines').push(user).key;
    });
  }

  setOfflineUser() {
    console.log( 'set offline user : ' + this.onlineKey);
    this.db.list('onlines').remove(this.onlineKey);
  }

  setUserStatus(status: string) {
    const path = `users/${this.currentUserId}`;
    const data = {
      status : status
    };
    return this.db.object(path).update(data);
  }
}
