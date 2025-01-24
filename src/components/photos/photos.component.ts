import { Component, OnInit, inject } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { Photo } from 'src/models'; // Assuming you have a Photo model
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-photos',
  imports: [MatCardModule, MatGridListModule],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent implements OnInit {
  dataService = inject(DataService);
  photoList: Photo[] = [];

  getPhotos() {
    this.dataService.getPhotos().subscribe((res) => {
      this.photoList = res;
    });
  }

  ngOnInit(): void {
    this.getPhotos();
  }

  trackById(index: number, photo: Photo): number {
    return photo.id;
  }
}
