import { Component, OnInit, inject } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { Comment } from 'src/models'; // Assuming you have a Comment model
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-comments',
  imports: [MatCardModule, MatGridListModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {
  dataService = inject(DataService);
  commentList: Comment[] = [];

  getComments() {
    this.dataService.getComments().subscribe((res) => {
      this.commentList = res;
    });
  }

  ngOnInit(): void {
    this.getComments();
  }

  trackById(index: number, comment: Comment): number {
    return comment.id;
  }
}
