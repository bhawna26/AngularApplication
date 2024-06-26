import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'] // Fix: Use 'styleUrls' instead of 'styleUrl'
})
export class ListTodosComponent implements OnInit {
  todos = [
    new Todo(1, "Learn to dance", false, new Date()),
    new Todo(2, "Become an expert at angular", false, new Date()),
    new Todo(3, "Become an expert at react", false, new Date()),
    new Todo(4, "Workout", true, new Date()),
  ];

  constructor() {}

  ngOnInit(): void {
    // Initialization logic here
  }
}
