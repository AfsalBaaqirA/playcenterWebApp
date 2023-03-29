import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="col">
      <div class="card h-100">
        <img *ngIf="imageUrl" [src]="imageUrl" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <p class="card-text">{{ description }}</p>
          <span class="badge text-bg-danger" *ngIf="showChip">{{ chip }}</span>
          <!-- Set the path game details page -->
          <a [routerLink]="['/game', game_id]" class="btn btn-primary">{{
            getStatus
          }}</a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() status!: string;
  @Input() release_date!: Date;
  @Input() game_id!: number;

  constructor() {}

  ngOnInit(): void {}

  // Placeholder image URL
  placeholderImageUrl = '/assets/images/placeholder-image.jpg';
  // Get current date
  get today() {
    return new Date();
  }

  // Get chip
  get chip() {
    this.release_date = new Date(this.release_date);
    if (this.release_date > this.today) {
      return 'Upcoming';
    } else if (
      this.release_date < this.today &&
      this.release_date >
        new Date(this.today.getTime() - 30 * 24 * 60 * 60 * 1000)
    ) {
      return 'New';
    } else {
      return '';
    }
  }

  get showChip() {
    return this.chip !== '';
  }

  get getStatus() {
    switch (this.status) {
      case 'Coming Soon':
        return 'Coming Soon';
      case 'Released':
        return 'Get Now';
      case 'Early Access':
        return 'Get Now';
      case 'Cancelled':
        return 'Cancelled';
      case 'Beta':
        return 'Get Now';
      case 'Alpha':
        return 'Get Now';
      case 'Demo':
        return 'Get Now';
      default:
        return 'Coming Soon';
    }
  }
}
