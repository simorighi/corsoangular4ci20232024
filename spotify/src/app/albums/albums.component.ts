import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit, OnDestroy{

  //l'oggetto di ti subscription abbonamento mi consente di gestire il subscibe 
  // sun un observe
  artistsId!: string; 
  routeSub!: Subscription;

  constructor(private activaedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSub = this.activaedRoute.params.subscribe(params => {
      this.artistsId = params['id'];
      console.log(this.artistsId) 
    }) 
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
