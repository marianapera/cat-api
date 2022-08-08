import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, retry } from 'rxjs';

import { AllCats } from './allcats.model';

@Injectable({
  providedIn: 'root'
})

export class CatService {
  api: string;
  apiKey: string;
  apiLink: string;

  constructor(private http: HttpClient) {
    this.api = "";
    this.apiLink = "https://api.thecatapi.com/v1/";
    this.apiKey = "feba2818-3e79-4325-8013-db6f46e90df4";
  }

  getRacas(): Observable<AllCats> {
    this.api = `${this.apiLink}images/search?has_breeds=1&limit=16&api_key=${this.apiKey}`;
    return this.http.get<AllCats>(this.api);
  }

  postFavs(id: string): Observable<any>{
    this.api = `${this.apiLink}favourites?api_key=${this.apiKey}`;
    return this.http.post<any>(this.api, {image_id: id, sub_id: 'Mariana'})
  }

  allFavs(): Observable<any>{
    this.api = `${this.apiLink}favourites?api_key=${this.apiKey}?sub_id=Mariana`;
    return this.http.get<any>(this.api);
  }

  detalhesId(id: string): Observable<any>{
    this.api = `${this.apiLink}/images/${id}?api_key=${this.apiKey}`;
    return this.http.get<any>(this.api);
  }
}