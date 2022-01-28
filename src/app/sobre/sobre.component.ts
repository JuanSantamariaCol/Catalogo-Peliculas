import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  readonly ROOT_URL = "https://api.themoviedb.org/3/movie/"
  apiKey:String = "?api_key=cd766a7f921b581804caba2fb470a22c"
  language:String = "&language=es-ES"
  idMov :any;
  dataMovie:any;

  constructor(private http: HttpClient) {
    this.idMov = localStorage.getItem("idMovie")
    console.log(this.idMov)
  }
  async getDataMovie(){
    this.dataMovie= await this.http.get(this.ROOT_URL+this.idMov+this.apiKey+this.language).toPromise();
    console.log(this.dataMovie)
  }
  
  ngOnInit(): void {
    this.getDataMovie()
  }

}
