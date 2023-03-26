import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  links = [
    {text: "Home", url: "/home"},
    {text: "About", url: "/about"},
    {text: "Contact", url: "/contact"},
  ];

}
