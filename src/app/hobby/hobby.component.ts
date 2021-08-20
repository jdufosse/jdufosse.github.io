import { Component, Input, AfterViewInit } from '@angular/core';
import bulmaCarousel from 'node_modules/bulma-carousel/dist/js/bulma-carousel';

var carousels: any = null;

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss'],
})
export class HobbyComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    carousels = bulmaCarousel.attach('#hobby-carousel', {
      slidesToScroll: 1,
      slidesToShow: 3,
      infinite: true,
      autoplay: true,
    });

    if (carousels) {
      console.debug(carousels);
    }
  }

  @Input()
  get model(): any {
    return this._model;
  }
  set model(model: any) {
    this._model = model;
  }
  private _model = null;
}
