import {Component, inject, input, OnInit, output} from '@angular/core';
import { Router } from "@angular/router";
import {CommonModule} from "@angular/common";

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from "@angular/material/button";
import {TranslocoPipe, TranslocoService} from "@jsverse/transloco";
import {LocalStorageService} from "../../core/services/utils/localStorage.service";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    CommonModule,
    TranslocoPipe
  ],
  templateUrl: './header.component.html',
  styles: `
    :host {
      .header-shadow {
        box-shadow: 0px 0px 10px 0px rgba(255, 85, 61, 0.15);
      }
      .lang-shadow {
        box-shadow: 0px 0px 15px 0px rgba(255, 85, 61, 0.20);
      }
    }
  `
})
export class HeaderComponent implements  OnInit {
  public bnwMode = false;
  public highlightMode = false;
  public dropdownOpen = false;
  public burgerMenuOpened = input<boolean>(false);
  public closeTrigger = output<boolean>();


  private readonly translocoService = inject(TranslocoService);
  private readonly localStorage = inject(LocalStorageService);
  private readonly router = inject(Router);

  public get locales(): string[] {
    return this.translocoService
      .getAvailableLangs()
      .map(lang => typeof lang === 'string' ? lang : lang.label);
  }

  public get currentLocale(): string {
    return this.translocoService.getActiveLang();
  }

  public localeSelect(locale: string): void {
    this.translocoService.setActiveLang(locale);
    this.localStorage.setItem('locale', locale);
    this.dropdownOpen = false;
  }

  public toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  public eyeMenuClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  public bnwChange(event: boolean): void {
    this.bnwMode = event;
  }

  public reset(): void {
    this.applyAccessibility();
  }

  public ngOnInit(): void {
    this.applyAccessibility();
    const savedLocale = this.localStorage.getItem('locale');
    if (savedLocale) {
      this.translocoService.setActiveLang(savedLocale);
    }
  }

  public applyAccessibility(): void {

  }

  public linkPress(): void {
    this.closeTrigger.emit(!this.burgerMenuOpened())
  }

  public burgerClick(): void {
    this.closeTrigger.emit(!this.burgerMenuOpened())
  }

}
