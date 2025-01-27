import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Post, Comment, Album, Photo, User, Todo } from 'src/models'; // Assuming you have a Comment, Album, Photo, User, and Todo model

@Injectable({
  providedIn: 'root',
})
export class DataService {
  http = inject(HttpClient);
  basePath = 'https://jsonplaceholder.typicode.com';

  getPosts() {
    const path = `${this.basePath}/posts`;
    return this.http.get<Post[]>(path);
  }

  getPostById(id: number) {
    const path = `${this.basePath}/posts/${id}`;
    return this.http.get<Post>(path);
  }

  getCommentsByPostId(id: number) {
    const path = `${this.basePath}/posts/${id}/comments`;
    return this.http.get<Comment[]>(path);
  }

  getComments() {
    const path = `${this.basePath}/comments`;
    return this.http.get<Comment[]>(path);
  }

  getAlbums() {
    const path = `${this.basePath}/albums`;
    return this.http.get<Album[]>(path);
  }

  getPhotos() {
    const path = `${this.basePath}/photos`;
    return this.http.get<Photo[]>(path);
  }

  getTodos() {
    const path = `${this.basePath}/todos`;
    return this.http.get<Todo[]>(path);
  }

  getUsers() {
    const path = `${this.basePath}/users`;
    return this.http.get<User[]>(path);
  }
}
