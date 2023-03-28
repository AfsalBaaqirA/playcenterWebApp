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
  // links!: {text:string, url:string}[];
  cards!: { imageUrl: string; title: string; description: string }[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.http.get('#').subscribe((response: any) => {
    //   this.links = response.links;
    // });
  }

  links = [
    { text: 'Home', url: '/home' },
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/contact' },
  ];

  // Banner URL
  // bannerImageUrl =

  // cards = [
  //   {
  //     imageUrl: 'https://www.bing.com/images/create/ford-mustang-2023-realistic-4k-city-background-nig/6421ad25e1194fab955c7b99e426f960?id=xrED%2bSmuJALDgr63n%2f%2b%2bVQ%3d%3d&view=detailv2&idpp=genimg&FORM=GCRIDP&mode=overlay',
  //     title: 'Card 1',
  //     description: 'This is the description for card 1.'
  //   },
  //   {
  //     imageUrl: 'https://www.bing.com/images/create/ford-mustang-2023-realistic-4k-city-background-nig/6421ad25e1194fab955c7b99e426f960?id=BXCWa%2bN4UbZUOy2HzkkQVw%3d%3d&view=detailv2&idpp=genimg&FORM=GCRIDP&mode=overlay',
  //     title: 'Card 2',
  //     description: 'This is the description for card 2.'
  //   },
  //   {
  //     imageUrl: 'https://www.bing.com/images/create/ford-mustang-2023-realistic-4k-city-background-nig/6421ad25e1194fab955c7b99e426f960?id=LwlooyUtblMsTLaEG7xovA%3d%3d&view=detailv2&idpp=genimg&FORM=GCRIDP&mode=overlay',
  //     title: 'Card 3',
  //     description: 'This is the description for card 3.'
  //   }
  // ];
}
