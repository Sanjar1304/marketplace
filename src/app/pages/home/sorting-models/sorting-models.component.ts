import { ChangeDetectionStrategy, Component } from '@angular/core';
import {TranslocoPipe} from "@jsverse/transloco";

@Component({
  selector: 'app-sorting-models',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './sorting-models.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortingModelsComponent {

}
