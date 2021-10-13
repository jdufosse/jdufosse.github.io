import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss'],
})
export class FormationsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  updateViewModel() {
    if (this._model) {
      this._timeline = [];
      this.model.forEach((formation) => {
        if (
          !this._timeline.length ||
          (formation.to &&
            this._timeline[this._timeline.length - 1].title !== formation.to)
        ) {
          this._timeline.push({
            isHeader: true,
            title: formation.to,
          });
        }

        this._timeline.push({
          isHeader: false,
          title: formation.title,
          description: formation.description,
        });

        if (formation.from !== formation.to) {
          this._timeline.push({
            isHeader: true,
            title: formation.from,
          });
        }
      });
    }
  }

  @Input()
  get timeline(): Array<any> {
    return this._timeline;
  }
  private _timeline: any = null;

  @Input()
  get model(): Array<any> {
    return this._model;
  }
  set model(model: Array<any>) {
    this._model = model;
    this.updateViewModel();
  }
  private _model: Array<any> = [];
}
