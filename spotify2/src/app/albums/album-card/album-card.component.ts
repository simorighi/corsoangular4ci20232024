import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [AlbumCardComponent],
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.css'
})
export class AlbumCardComponent {
  @Input() albums: any;
}
