import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-album-grid',
  standalone: true,
  imports: [AlbumGridComponent],
  templateUrl: './album-grid.component.html',
  styleUrl: './album-grid.component.css'
})
export class AlbumGridComponent {
  @Input() albums: any;
}
