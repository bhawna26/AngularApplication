import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'bhawna';
  password = '123';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  // Router by dependency injection. Router is a dependency of the login component.
  constructor(private router: Router) { }

  ngOnInit(): void {
    // Any initialization logic can be added here
  }

  handleLogin(): void {
    if (this.username === 'bhawna' && this.password === '123') {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
  }
}
