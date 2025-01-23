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
}
