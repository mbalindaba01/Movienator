import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { FormControl } from '@angular/forms';
import { empty, BehaviorSubject } from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class MovienatorService {
  private _moviesMessageSource = new BehaviorSubject<any>('')//Subject<any>();
  moviesMessageSource$ = this._moviesMessageSource.asObservable();
  //searchResults: Observable<any>
  params: Observable<any> = empty();
  private API_KEY = 'd843cbddc427fa0a4fea13fc2441fed1';
  private baseUrl = 'https://api.themoviedb.org/3/movie/';
  private searchUrl = 'https://api.themoviedb.org/3/search/movie?'; 
  private language;
  //'5b65fdb8';
  
  constructor(private httpClient:HttpClient) { 
    this.language = 'en';
  }

  public getmovies() {
     return this.httpClient.get(`${this.baseUrl}popular?api_key=${this.API_KEY}&language=${this.language}`)
   // return this.httpClient.get(`https://www.omdbapi.com/?s=title&page=1-12&apikey=5b65fdb8`)
    //return Movies;
  }


 
 
  search(terms: Observable<string>) {
    return terms.pipe(
       debounceTime(1000)
      ,distinctUntilChanged(),
      switchMap(term=>this.searchEntries(term)));
    
  }


searchEntries(term:string) {
  const arr = term.split('');
  if (arr.length !== 0){
  const searchUrl = `${this.searchUrl}api_key=${this.API_KEY}&language=${this.language}&query=${term}`;

  return this.httpClient.get(searchUrl)
  
  } else {
    return this.params;
  }
}

 sendMessage(message){
   this._moviesMessageSource.next(message);
   console.log(message)
 }

}

/*const Movies =[
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
]
*/