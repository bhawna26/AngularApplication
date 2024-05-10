import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit{
  todos=[
    {
      id:1,
      description:'Learn to dance'
    },
    {
      id:2,
      description:'workout'

    },
    {
      id:3,
      description:'study'

    },
  
  ]
  // todo={
  //   id:1,
  //   description:'Learn to dance'
  // }
  constructor(){

  }
ngOnInit(): void {
  throw new Error('Method not implemented.');
}

}
