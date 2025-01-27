import { TitleCasePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, TitleCasePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  router = inject(Router);
  title = '';

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.title =
          event.urlAfterRedirects.split('/').join(' / ')?.slice(2) || '';
      }
    });
  }
}
