import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit, OnDestroy{

  //solo le proèrietà di componente possono esser visualizzate nel html
  artistsId!: string; 
  albums: any;
  artistName!: string;
  inAttesaDati: boolean = true;

  routeSub!: Subscription;

  constructor(private activaedRoute: ActivatedRoute,
              private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    //params è un observable ceh controlla le URL se cambiano
    this.routeSub = this.activaedRoute.params.subscribe(params => {
      this.artistsId = params['id'];
      console.log(this.artistsId);
      this.spotifyService.getAlbums(this.artistsId).subscribe(data =>{
        //dalla risposta della API la risposta è contenuta nella variabile data
        //memorizzo l'array di items
        timer(3000).subscribe(() => {
          this.albums = data.albums;
        if (data.items.length > 0) {
          this.albums = data.items;
          if (this.albums[0].artists.length > 0) {
            this.artistName = this.albums[0].artists[0].name;
            this.inAttesaDati = false;
          }
        }
        });
      })
      
    }) 
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
