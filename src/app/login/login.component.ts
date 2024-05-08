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
errorMessage='Invalid Credentials'
invalidLogin=false
handleLogin(){
  if(this.username==='bhawna' && this.password==='123'){
    this.invalidLogin=false;
  }
  else this.invalidLogin=true;
}
}
