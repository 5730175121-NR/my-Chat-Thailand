import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
  email: string;
  password: string;
  errorMsg: string;

  constructor(private authService: AuthService, private router: Router) { 
    this.authService.authUser().subscribe(auth => {
      if(auth !== undefined && auth !== null) this.router.navigate(['chat']);
    });
  }

  ngOnInit() {
  }

  login() {
    console.log('login() called from login-form component');
    this.authService.login(this.email, this.password)
    .catch(error => this.errorMsg = error.message);
  }
}
