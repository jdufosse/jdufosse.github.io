import { Component, Input, OnInit } from '@angular/core';
import * as model from '../../types/data';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss'],
})
export class MissionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  get model(): model.Mission {
    return this._model;
  }
  set model(model: model.Mission) {
    this._model = model;
  }
  private _model: model.Mission = undefined;
}
