import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
  message='Some Welcome Message'
  name=''
  //to extract name from the url we are using activated route
 constructor(private route:ActivatedRoute){

 }
ngOnInit(): void {
  console.log(this.message);
  // console.log(this.route.snapshot.params['name']);
  this.name=this.route.snapshot.params['name'];
}
}
