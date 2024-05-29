import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string): boolean {
    console.log('before'+this.isUserLoggedIn());
    if (username === 'bhawna' && password === '123') {
      sessionStorage.setItem('authenticateUser',username);
      console.log('after'+this.isUserLoggedIn());

      return true;
    }
    return false;
  }
  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticateUser')
    return !(user==null)
  }
}
