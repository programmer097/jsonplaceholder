import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterModule,
    MatListModule,
    CommonModule,
    TitleCasePipe,
    MatIconModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  resources = [
    { name: 'posts', path: '/posts', icon: 'article' },
    { name: 'comments', path: '/comments', icon: 'comment' },
    { name: 'albums', path: '/albums', icon: 'album' },
    { name: 'photos', path: '/photos', icon: 'photo' },
    { name: 'todos', path: '/todos', icon: 'check_circle' },
    { name: 'users', path: '/users', icon: 'person' },
  ];
}
