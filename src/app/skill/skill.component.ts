import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  get model(): any { return this._model; }
  set model(model: any) {
    this._model = model;
  }
  private _model = null;
}
