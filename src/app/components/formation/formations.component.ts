import { Component, Input, OnInit } from '@angular/core';
import * as prismicModel from '../../types/prismic';
import * as frontModel from '../../types/front';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss'],
})
export class FormationsComponent implements OnInit {
  public timeline: frontModel.Timeline[] = [];

  constructor() {}

  ngOnInit(): void {}

  updateViewModel() {
    if (this._model) {
      this.timeline = [];
      this.model.forEach((formation) => {
        if (!formation) {
          return;
        }

        if (
          !this.timeline.length ||
          (formation.to &&
            this.timeline[this.timeline.length - 1].title !== formation.to)
        ) {
          this.timeline.push(<frontModel.Timeline>{
            isHeader: true,
            title: formation.to,
          });
        }

        this.timeline.push(<frontModel.Timeline>{
          isHeader: false,
          title: formation.title,
          description: formation.description,
        });

        if (formation.from !== formation.to) {
          this.timeline.push(<frontModel.Timeline>{
            isHeader: true,
            title: formation.from,
          });
        }
      });
    }
  }

  @Input()
  get model(): prismicModel.Formation[] {
    return this._model;
  }
  set model(model: prismicModel.Formation[]) {
    this._model = model;
    console.log('FormationsComponent', { model });
    this.updateViewModel();
  }
  private _model: prismicModel.Formation[] = [];
}
