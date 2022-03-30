
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { Res } from '../restaurants';
// import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  restaurants!: any;
  restaurantsArr!: any[];
  constructor(http: HttpClient) {
    http.get('https://s3.amazonaws.com/br-codingexams/restaurants.json')
    .subscribe(response=>{
      this.restaurants = response;
      this.restaurantsArr = this.restaurants.restaurants;
      console.log(this.restaurantsArr);
    })
  }
  
  ngOnInit(): void {   
  }

}
