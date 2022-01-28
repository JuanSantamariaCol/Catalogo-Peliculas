import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit {
  

  readonly ROOT_URL = "https://api.themoviedb.org/3/discover/movie?api_key=cd766a7f921b581804caba2fb470a22c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres="
  base_urlImg = "https://image.tmdb.org/t/p/w500"
  idGender: any;
  nameGender: any;
  movies:any;

  constructor(private http: HttpClient){
    this.idGender = localStorage.getItem("idGender")
    this.nameGender = localStorage.getItem("nameGender")
  }
  
  passId(id:number){
    localStorage.setItem("idMovie",String(id));
  } 
  changePoster(posterPath:string):string{
    return this.base_urlImg+posterPath
  }

  async getMovies(){
    this.movies= await this.http.get(this.ROOT_URL+this.idGender).toPromise();
    console.log(this.movies)
    this.movies= this.movies.results

  }

  ngOnInit(): void {
    this.getMovies()
  }


}
