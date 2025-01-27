import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { Post } from 'src/models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-card',
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
})
export class PostCardComponent {
  data = input<Post>();
}
