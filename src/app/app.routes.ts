import { Routes } from '@angular/router';
import { AlbumsComponent } from 'src/components/albums/albums.component';
import { CommentsComponent } from 'src/components/comments/comments.component';
import { MainComponent } from 'src/components/main/main.component';
import { PhotosComponent } from 'src/components/photos/photos.component';
import { PostsComponent } from 'src/components/posts/posts.component';
import { TodosComponent } from 'src/components/todos/todos.component';
import { UsersComponent } from 'src/components/users/users.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'comments',
    component: CommentsComponent,
  },
  {
    path: 'albums',
    component: AlbumsComponent,
  },
  {
    path: 'photos',
    component: PhotosComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
];
