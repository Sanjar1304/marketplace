import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styles: `
    :host ::ng-deep .header-shadow {
      box-shadow: 0px 0px 10px 0px rgba(255, 85, 61, 0.15);
    }
  `
})
export class HeaderComponent {

}
