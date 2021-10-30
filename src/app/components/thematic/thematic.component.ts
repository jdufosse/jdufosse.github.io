import { Component, OnInit, Input } from '@angular/core';
import {
  faCoffee,
  faStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

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
  get model(): any {
    return this._model;
  }
  set model(model: any) {
    this._model = model;
  }
  private _model = null;

  @Input()
  get index(): number {
    return this._index;
  }
  set index(index: number) {
    this._index = index;
  }
  private _index = 0;
}
