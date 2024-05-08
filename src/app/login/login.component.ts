import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
username='bhawna'
password='123'
handleLogin(){
  console.log(this.username);
}
}
