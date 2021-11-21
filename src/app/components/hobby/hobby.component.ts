import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss'],
})
export class HobbyComponent {
  public images : any[] = [];

  constructor() {}

  updateImages() {
    const images : any[] = [];
    if(this._model){
      this._model.forEach((hobby, i) =>{
        if (hobby) {
          images.push({path:'/assets/images/' + hobby.imageUrl});
        }
      });
    }
    this.images = images;
  }

  

  @Input()
  get model(): any[] {
    return this._model;
  }
  set model(model: any[]) {
    this._model = model;

    this.updateImages();
  }
  private _model : any[]= [];
}
