import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from 'src/components/header/header.component';
import { MainComponent } from 'src/components/main/main.component';
import { SidebarComponent } from 'src/components/sidebar/sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterModule,
    SidebarComponent,
    HeaderComponent,
    MatSidenavModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CodeSandbox';
  showFiller = false;
}
