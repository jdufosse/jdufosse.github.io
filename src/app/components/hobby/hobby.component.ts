import { Component, Input } from '@angular/core';
import * as model from '../../types/data';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss'],
})
export class HobbyComponent {
  public images: any[] = [];

  constructor() {}

  updateImages() {
    const images: any[] = [];
    if (this._model) {
      this._model.forEach((hobby, i) => {
        if (hobby) {
          images.push({ path: hobby.image });
        }
      });
    }
    this.images = images;
  }

  @Input()
  get model(): model.Hobby[] {
    return this._model;
  }
  set model(model: model.Hobby[]) {
    this._model = model;

    this.updateImages();
  }
  private _model: model.Hobby[] = [];
}
