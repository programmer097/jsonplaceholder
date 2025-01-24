import { Component, OnInit, inject } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { Todo } from 'src/models'; // Assuming you have a Todo model
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-todos',
  imports: [MatCardModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  dataService = inject(DataService);
  todoList: Todo[] = [];

  getTodos() {
    this.dataService.getTodos().subscribe((res) => {
      this.todoList = res;
    });
  }

  ngOnInit(): void {
    this.getTodos();
  }

  trackById(index: number, todo: Todo): number {
    return todo.id;
  }
}
