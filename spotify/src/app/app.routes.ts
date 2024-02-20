import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreditsComponent } from './credits/credits.component';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumsComponent } from './albums/albums.component';
import { NotFoundComponent } from './not-found/not-found.component';

// l'oggetto routs definisce i percorsi (/artist) gestiti dalla nostra app
// è un array di oggetti 
export const routes: Routes = [
    //ogni oggetto presenta path: '' , parte finale del percorso 
    //e una proprietà chiamata component:  ovvero il componente da visualizzare
    {path: '', component: HomeComponent},
    {path: 'credits', component: CreditsComponent},
    {path: 'artists', component:ArtistsComponent},
    {path: 'albums/:id', component:AlbumsComponent},
    //con ** gestisco tutti i percorsi precedentemente non dichiarati
    {path: '**', component: NotFoundComponent}

];
