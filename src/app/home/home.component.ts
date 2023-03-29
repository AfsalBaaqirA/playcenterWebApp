import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CardComponent } from '../cards/card.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isDataLoaded = false;

  //  Get these data from the API
  games: {
    game_id: number;
    game_name: string;
    game_short_description: string;
    game_spotlight_image: string;
    game_status: string;
    game_release_date: Date;
  }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // API URL
    const API_URL =
      'https://playcenter.azurewebsites.net/playcenter/games/?format=json';

    this.http.get(API_URL).subscribe((response: any) => {
      this.games = response.results;
      this.isDataLoaded = true;
    });
  }

  links = [
    { text: 'Home', url: '/home' },
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/contact' },
  ];

  // Banner URL
  bannerImageUrl = '/assets/images/banner_001.jpg';
  placeholderImageUrl = '/assets/images/placeholder-image.jpg';

  createRange(placeholdercount: number) {
    // return new Array(number);
    return new Array(placeholdercount).fill(0).map((n, index) => index + 1);
  }
}
