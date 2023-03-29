import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game-details-component',
  templateUrl: './game-details-component.component.html',
  styleUrls: ['./game-details-component.component.css'],
})
export class GameDetailsComponentComponent {
  gameId!: number;
  gamedetails: any;
  isDataLoaded = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const GAMEDETAILS_API_URL =
      'https://playcenter.azurewebsites.net/playcenter/game/';

    this.route.params.subscribe((params) => {
      this.gameId = params['id'];
    });

    this.http
      .get(GAMEDETAILS_API_URL + this.gameId + '/?format=json')
      .subscribe((data: any) => {
        this.gamedetails = data;
        this.isDataLoaded = true;
        console.log(this.gamedetails);
      });
  }

  // Game Details Data API URL
  getGameDetails() {}
}
