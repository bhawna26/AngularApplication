import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoApplication';
  // message is binded to htmlfile using two curly brackets
  message="hello user";
}
