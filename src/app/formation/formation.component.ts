import { Component, Input, OnInit } from '@angular/core';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

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
  get model(): any {
    return this._model;
  }
  set model(model: any) {
    this._model = model;
  }
  private _model: any = null;
}
