import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, MatListModule, CommonModule, TitleCasePipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  readonly resources = [
    { name: 'posts', path: '/posts' },
    { name: 'comments', path: '/comments' },
    { name: 'albums', path: '/albums' },
    { name: 'photos', path: '/photos' },
    { name: 'todos', path: '/todos' },
    { name: 'users', path: '/users' },
  ];
}
