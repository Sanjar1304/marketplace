import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgClass } from "@angular/common";
import {TranslocoPipe} from "@jsverse/transloco";

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgClass, TranslocoPipe],
  templateUrl: './slider.component.html',
  styles: ``,
})
export class SliderComponent implements OnInit, OnDestroy {
  slides = [
    { image: './assets/icons/car-in-red.svg' },
    { image: './assets/icons/car-in-red.svg' },
    { image: './assets/icons/lock-colorless.svg' }
  ];
  currentIndex = 0;
  timer: any;
  transitionDuration = 1000; // duration for each slide in milliseconds

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  startAutoSlide() {
    this.timer = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, this.transitionDuration);
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index;
    clearInterval(this.timer);
    this.startAutoSlide();
  }
}
