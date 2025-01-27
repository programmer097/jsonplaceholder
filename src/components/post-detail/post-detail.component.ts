import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { Comment, Post } from 'src/models';
import { PostCardComponent } from '../post-card/post-card.component';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, PostCardComponent],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  post: Post | null = null;
  comments: Comment[] | null = null;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id') || 0;
    this.fetchPost(+postId);
    this.fetchComments(+postId);
  }

  fetchPost(id: number) {
    this.dataService.getPostById(id).subscribe((data: any) => {
      this.post = data;
    });
  }

  fetchComments(postId: number) {
    this.dataService.getCommentsByPostId(postId).subscribe((data: any[]) => {
      this.comments = data;
    });
  }
}
