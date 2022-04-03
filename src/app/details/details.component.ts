import { Component, OnInit } from '@angular/core';
import Restaurants from '../interfaces/restaurants';
import { RestaurantsService } from '../service/restaurants.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  restaurant!: Restaurants;
  constructor(private itemRestaurantsSvc: RestaurantsService) {}

  ngOnInit(): void {
    // Home componentdan RestaurantsSrevice ga berib yuborilgan
    // Restaurants objecti olinib ozidagi o'zgaruvchiga assign qlindi
    this.restaurant = this.itemRestaurantsSvc.gettingRestaurant;
    // console log should not be committed. Try to learn to debug in the browser.
    console.log(this.restaurant);
  }
}
