import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MoviesComponent } from './movies/movies.component'
import { MovienatorService } from './movienator.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviedetailComponent } from './moviedetail/moviedetail.component'
import { ReactiveFormsModule } from '@angular/forms';
import { FavouritesComponent } from './favourites/favourites.component';





@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    MoviesComponent,
    MoviedetailComponent,
    FavouritesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule
  
  ],
  providers: [MovienatorService],
  bootstrap: [AppComponent],
  entryComponents:[MoviedetailComponent]
})
export class AppModule { }
