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
  //     {
  //     "game_id": 5,
  //     "game_name": "Kitchen Krapper",
  //     "game_description": "Cooking simulation game.",
  //     "game_spotlight_image": "http://playcenter-api-production.up.railway.app/media/game/images/game_spotlight_images/img_001.png",
  //     "game_status": "Coming Soon",
  //      "game_release_date": "2023-03-27"
  // }

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
      'https://playcenter-api-production.up.railway.app/playcenter/games/?format=json';

    this.http.get(API_URL).subscribe((response: any) => {
      this.games = response.results;
      console.log(this.games);
    });
  }

  links = [
    { text: 'Home', url: '/home' },
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/contact' },
  ];

  // Banner URL
  bannerImageUrl = 'assets/images/banner_001.jpg';
}
