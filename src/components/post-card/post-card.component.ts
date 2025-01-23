import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { Post } from 'src/models';

@Component({
  selector: 'app-post-card',
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
})
export class PostCardComponent {
  data = input<Post>();
}
