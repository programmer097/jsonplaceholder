import { Component, OnInit, inject } from '@angular/core';
import { Post } from 'src/models';
import { DataService } from 'src/services/data.service';
import { PostCardComponent } from '../post-card/post-card.component';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-posts',
  imports: [PostCardComponent, MatGridListModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  dataService = inject(DataService);
  postList: Post[] = [];

  getPosts() {
    this.dataService.getPosts().subscribe((res) => {
      this.postList = res;
    });
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
