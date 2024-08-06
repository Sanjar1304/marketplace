import { ChangeDetectionStrategy, Component } from '@angular/core';
import {TranslocoPipe} from "@jsverse/transloco";

@Component({
  selector: 'app-recommendation-cards',
  standalone: true,
  imports: [TranslocoPipe],
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
