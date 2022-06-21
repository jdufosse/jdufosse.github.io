import { Component, Input, OnInit } from '@angular/core';
import {
  faStar as fasStar,
  faStarHalfAlt as fasStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import * as model from '../../types/prismic';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {
  public fasStar = fasStar;
  public fasStarHalfAlt = fasStarHalfAlt;
  public farStar = farStar;

  constructor() {}

  ngOnInit(): void {}

  @Input()
  get model(): model.Skill {
    return this._model;
  }
  set model(model: model.Skill) {
    this._model = model;
  }
  private _model: model.Skill = undefined;

  @Input()
  get level(): number {
    return this._level;
  }
  set level(level: number) {
    this._level = level;
  }
  private _level = 0;
}
