import { Component, OnInit, inject } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { Album } from 'src/models'; // Assuming you have an Album model
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-albums',
  imports: [MatCardModule, MatGridListModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  dataService = inject(DataService);
  albumList: Album[] = [];

  getAlbums() {
    this.dataService.getAlbums().subscribe((res) => {
      this.albumList = res;
    });
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  trackById(index: number, album: Album): number {
    return album.id;
  }
}
