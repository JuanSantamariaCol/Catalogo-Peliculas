import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  readonly ROOT_URL  = "https://api.themoviedb.org/3/genre/movie/list?api_key=cd766a7f921b581804caba2fb470a22c&language=es-ES";
  genders : any;

  constructor(private http: HttpClient) { }

  
  async getGenders(){
    this.genders = await this.http.get(this.ROOT_URL).toPromise();
    this.genders = this.genders.genres
    
  }

  movieGender(id:number,nameGender:String){ 
    localStorage.setItem("idGender",String(id));
    localStorage.setItem("nameGender",String(nameGender));
    
  }

  ngOnInit(): void {
    this.getGenders()
  }

}
