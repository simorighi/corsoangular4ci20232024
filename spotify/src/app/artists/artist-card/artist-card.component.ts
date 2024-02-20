import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-card',
  standalone: true,
  imports: [],
  templateUrl: './artist-card.component.html',
  styleUrl: './artist-card.component.css'
})
export class ArtistCardComponent {

  //Dependency Injection utilizzo oggetto router che mi consente di navigare
  //attraverso codice ts
  constructor(private router: Router) { }

  @Input() artist: any;

  visualizzaAlbums(artistId: string):void {
    this.router.navigate(['/albums', artistId]);
  }
}