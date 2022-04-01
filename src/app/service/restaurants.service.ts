import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import Restaurants from '../interfaces/restaurants';

const URL = 'https://s3.amazonaws.com/br-codingexams/restaurants.json';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {

// detailsga bitta restaurants object berib yuborish uchun o'zgaruvchi 
  gettingRestaurant!: Restaurants;

            // http dan foydlanish uchun HttpClient 
  constructor(private http: HttpClient) {}

  getRestaurant(): Observable<Restaurants[]> {
    let id = Math.floor(Math.random() * 100);
    return this.http.get<any>(`${URL}`).pipe(
// Id qo'shib olamiz pipe ning map metodi orqali 
      map((response) =>
        response.restaurants.map((e: Restaurants) => {
          e.id = id++;
          return e;
        })
      )
    );
  }

// details componentiga home componentidan restaurants 
// array of objectidan tanlangan id lisini berib yuborish uchun
  getResItem(restaurant: Restaurants) {
    this.gettingRestaurant = restaurant;
  }
}

// tap((restaurants: Restaurants[]) => {
//   this.restaurantsData = restaurants;
//   return restaurants;
// })
