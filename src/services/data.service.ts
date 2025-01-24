import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Post } from 'src/models';

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
  getComments() {
    const path = `${this.basePath}/comments`;
    return this.http.get<Post[]>(path);
  }
  getAlbums() {
    const path = `${this.basePath}/albums`;
    return this.http.get<Post[]>(path);
  }
  getPhotos() {
    const path = `${this.basePath}/photos`;
    return this.http.get<Post[]>(path);
  }
  getTodos() {
    const path = `${this.basePath}/todos`;
    return this.http.get<Post[]>(path);
  }
  getUsers() {
    const path = `${this.basePath}/users`;
    return this.http.get<Post[]>(path);
  }
}
