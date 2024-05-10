import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
//Router by dependency injection.Router is a dependency of the login component.
constructor(private router:Router){
  
}
handleLogin(){
  if(this.username==='bhawna' && this.password==='123'){
    this.invalidLogin=false;
    this.router.navigate(['welcome'])
  }
  else this.invalidLogin=true;
}
}
