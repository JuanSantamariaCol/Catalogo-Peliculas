import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  readonly ROOT_URL ="https://api.themoviedb.org/3/movie/popular?api_key=cd766a7f921b581804caba2fb470a22c&language=es-ES&page=1"
  movies: any;
  base_urlImg = "https://image.tmdb.org/t/p/w500"
  constructor(private http: HttpClient) { }

  changePoster(posterPath:string):string{
    return this.base_urlImg+posterPath
  }
  async getMovies(){
    this.movies= await this.http.get(this.ROOT_URL).toPromise();
    this.movies= this.movies.results

  }

  passId(id:number,){
    localStorage.setItem("idMovie",String(id));
  }

  ngOnInit(): void {
    this.getMovies()
  }

}
