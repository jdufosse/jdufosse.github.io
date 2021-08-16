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
          this._timeline[this._timeline.length - 1].title !== formation.from
        ) {
          this._timeline.push({
            isHeader: true,
            title: formation.from,
          });
        }

        this._timeline.push({
          isHeader: false,
          title: formation.from,
        });

        if (formation.to) {
          this._timeline.push({
            isHeader: true,
            title: formation.to,
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
