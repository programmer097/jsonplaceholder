import { Component, OnInit, inject } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { User } from 'src/models'; // Assuming you have a User model
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-users',
  imports: [MatCardModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  dataService = inject(DataService);
  userList: User[] = [];

  getUsers() {
    this.dataService.getUsers().subscribe((res) => {
      this.userList = res;
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  trackById(index: number, user: User): number {
    return user.id;
  }
}
