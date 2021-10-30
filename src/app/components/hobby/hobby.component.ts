import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss'],
})
export class HobbyComponent {
  constructor() {}

  @Input()
  get model(): any {
    return this._model;
  }
  set model(model: any) {
    this._model = model;
  }
  private _model = null;
}
