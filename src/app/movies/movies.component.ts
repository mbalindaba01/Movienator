import { Component, OnInit,EventEmitter,Input,Output,OnDestroy } from '@angular/core';



import { MatDialog } from '@angular/material/dialog';
import { MoviedetailComponent } from '../moviedetail/moviedetail.component';
import { MovienatorService } from '../movienator.service';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';




@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})


export class MoviesComponent implements OnInit,OnDestroy {
  searchTerm$ = new Subject<string>();
  subscription:Subscription
  isFavourite:boolean = false;
  movies:any[];
  favouritesArray:any[] = [];
  heart:any;
  currentMovie:Object;
  
  

    
  constructor(public dialog:MatDialog , private movienatorService:MovienatorService)  {
     
   }

  ngOnInit() {
   this.movienatorService.getmovies().subscribe((data)=>{
     // console.log(data);
      //console.log(data['total_results'])
      this.movies = data['results'];
    });

   
      
  this.subscription = this.movienatorService.search( this.searchTerm$)
   .subscribe(data => { if (data)
    this.movies = data['results'];
   // console.log(this.movies)
   
},
 err => console.log(err),
 () => console.log(this.movies)

);
    

    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

    favs(event,movie){
      this.currentMovie = movie;
      this.heart = event.target
      this.isFavourite = !this.isFavourite
      if(this.isFavourite === true ){
        this.heart.style.color = "red";
        if(!this.favouritesArray.includes(movie)){
          this.favouritesArray.push(movie)
        }
      }else{
        this.heart.style.color="gray";
        this.favouritesArray = this.favouritesArray.filter(movie=>{
          return movie !== this.currentMovie
        })
      }
      console.log(this.favouritesArray)
      this.movienatorService.sendMessage(this.favouritesArray)
    }

  
   
  
    highlightSelected(selectedMovie){
    this.openDialog(selectedMovie)
    }
    openDialog(movie): void {
      const dialogRef = this.dialog.open(MoviedetailComponent, {
        data:movie
        
      });
    
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result)
      });
    }
  
  

  


   
      /*Movies =[
        {
          name:"Green Lantern",
          rating: 5.5,
          year : 2011,
          genre:"Action , Sci-fi",
          url:"https://i.postimg.cc/63G6r0Bf/green-Lantern.jpg"
        },
        {
          name:"Spiderman Homecoming",
          rating: 6.7,
          year : 2018,
          genre:"Action",
          url:"https://i.postimg.cc/qv5d13bb/spiderman.jpg"
        },
        {
          name:"Avatar",
          rating: 7.8,
          year : 2009,
          genre:"Action,Adventure,Fantasy",
          url: "https://i.postimg.cc/hGdNM37v/avatar.jpg"
        },
        {
          name:"Thor",
          rating: 7.9,
          year : 2017,
          genre:"Action,Adventure,Comedy",
          url:"https://i.postimg.cc/fLQpPjxK/thor.jpg"
        },
        {
          name:"Avengers Endgame",
          rating: 8.5,
          year : 2019,
          genre:"Action,Adventure,Sci-fi",
          url:"https://i.postimg.cc/P5L7rFyy/avengers.jpg"
        },
        {
          name:"Sherlock",
          rating: 9.1,
          year : 2010,
          genre:"Crime,Drama,Mystery",
          url:"https://i.postimg.cc/t4LM1tmj/sherlockholmes.jpg"
        },
        {
          name:"Twilight",
          rating: 5.5,
          year : 2011,
          genre:"Action , Sci-fi",
          url:"https://i.postimg.cc/X7P2hkWC/twilight.jpg"
        },
        {
          name:"Batman: The Dark Knight",
          rating: 8.3,
          year : 2008,
          genre:"Action,Adventure",
          url:"https://i.postimg.cc/HLwBrGyw/batman.jpg"
        }
      ]*/
    
  }

