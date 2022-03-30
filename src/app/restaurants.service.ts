import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Post from './restaurants';

const URL = 'https://s3.amazonaws.com/br-codingexams/restaurants.json';
 
@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  constructor(private http: HttpClient) { }
  getRestaurant():Observable<Post[]>{  
    return this.http.get<Post[]>(`${URL}`)
  }
}
