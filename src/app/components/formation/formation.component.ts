import { Component, Input, OnInit } from '@angular/core';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import * as model from '../../types/front';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss'],
})
export class FormationComponent implements OnInit {
  public faFlag = faFlag;

  constructor() {}

  ngOnInit(): void {}

  @Input()
  get model(): model.Timeline {
    return this._model;
  }
  set model(model: model.Timeline) {
    this._model = model;
  }
  private _model: model.Timeline = { isHeader: false, title: '' };
}
