import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <img [src]="imageUrl" [alt]="title">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() description!: string;
}
