import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component'
import { FavouritesComponent } from './favourites/favourites.component';


const routes: Routes = [
  {path: '', component:MoviesComponent},
  {path: 'favourites',component: FavouritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
