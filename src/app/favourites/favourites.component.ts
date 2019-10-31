import { Component, OnInit,OnDestroy } from '@angular/core';

import { MovienatorService } from '../movienator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favourites;
  subscription:Subscription
  isFavourite:boolean = true;
  movies:any[];
  heart:any;
  currentMovie:Object;
  

  constructor(public movienatorService: MovienatorService) { }

  ngOnInit() {
   this.subscription= this.movienatorService.moviesMessageSource$
    .subscribe(message=>{
      this.favourites = message;
      
    },
    
      err => console.log(err),
     () => console.log(this.favourites)
      
      )
      console.log(this.favourites)  
  }


  
    favs(movie){
    this.currentMovie = movie;
    this.isFavourite = !this.isFavourite
    if(this.isFavourite === false ){
      this.favourites = this.favourites.filter(movie=>{
        return movie !== this.currentMovie
      })
    }
  }
   
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
