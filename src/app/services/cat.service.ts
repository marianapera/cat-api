import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, retry } from 'rxjs';
 
import { AllCats } from '../models/allcats.model';
 
@Injectable({
  providedIn: 'root'
})
 
export class CatService {
  api: string;
  apiKey: string;
  user: string;
  header: HttpHeaders;
 
  constructor(private http: HttpClient) {
    this.api = "";
    this.apiKey = "feba2818-3e79-4325-8013-db6f46e90df4";
    this.user = "Mariana";
 
    this.header = new HttpHeaders({
      'x-api-key': this.apiKey
    })
  }
 
  // HOME
  getRacas(): Observable<AllCats> {
    this.api = `https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=16`;
 
    return this.http.get<AllCats>(this.api, {headers: this.header});
  }
  // DETAILS
  detailsId(id: string): Observable<any>{
    this.api = `https://api.thecatapi.com/v1/images/${id}`;
 
    return this.http.get<any>(this.api, {headers: this.header});
  }
  // FAVOURITES
  postFavs(id: string): Observable<any>{
    this.api = `https://api.thecatapi.com/v1/favourites`;
 
    return this.http.post<any>(this.api, {image_id: id, sub_id: 'Mariana'}, {headers: this.header})
  }
 
  allFavs(): Observable<any>{
    this.api = `https://api.thecatapi.com/v1/favourites?sub_id=${this.user}`;
 
    return this.http.get<any>(this.api, {headers: this.header});
  }
 
  deleteFav(idFav: string): Observable<any> {
    this.api = `https://api.thecatapi.com/v1/favourites/${idFav}`;
 
    return this.http.delete<any>(this.api, {headers: this.header});
  }
}
