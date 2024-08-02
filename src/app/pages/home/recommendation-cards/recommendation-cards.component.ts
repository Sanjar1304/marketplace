import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-recommendation-cards',
  standalone: true,
  imports: [],
  templateUrl: './recommendation-cards.component.html',
  styles: `
    .custom {
      margin: 0 auto !important;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendationCardsComponent {

}
