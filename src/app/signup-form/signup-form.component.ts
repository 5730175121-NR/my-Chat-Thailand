import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  email: string;
  password: string;
  displayName: string;
  gender: string = 'male';
  age: number = 18;
  errorMsg: string;
  ageOption: number[] = [12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];

  constructor(private authService: AuthService, private router: Router) { }

  signUp() {
    this.authService.signUp(this.email, this.password, this.displayName, this.gender, this.age)
      .then(resolve => this.router.navigate(['login']))
      .catch(error => this.errorMsg = error.message);
  }

  ngOnInit() {
  }

  

}
