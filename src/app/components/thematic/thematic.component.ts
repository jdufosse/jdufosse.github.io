import { Component, OnInit, Input } from '@angular/core';
import {
  faCoffee,
  faStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import * as model from '../../types/prismic';

@Component({
  selector: 'app-thematic',
  templateUrl: './thematic.component.html',
  styleUrls: ['./thematic.component.scss'],
})
export class ThematicComponent implements OnInit {
  public faCoffee = faCoffee;
  public faStar = faStar;
  public faStarHalfAlt = faStarHalfAlt;
  public farStar = farStar;

  constructor() {}

  ngOnInit(): void {}

  @Input()
  get model(): model.Thematic {
    return this._model;
  }
  set model(model: model.Thematic) {
    this._model = model;
  }
  private _model: model.Thematic = undefined;
}
