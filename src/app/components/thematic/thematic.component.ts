import { Component, Input } from '@angular/core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import * as model from '../../types/data';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-thematic',
  templateUrl: './thematic.component.html',
  styleUrls: ['./thematic.component.scss'],
})
export class ThematicComponent {
  public iconName: IconName = 'coffee';

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  async UpdateIcon(): Promise<void> {
    if (this._model?.icon) {
      const iconName: IconName | undefined = this._model?.icon as IconName;

      if (iconName) {
        console.log('UpdateIcon', { iconName });
        this.iconName = iconName;
      }
    }
  }

  @Input()
  get model(): model.Thematic {
    return this._model;
  }
  set model(model: model.Thematic) {
    this._model = model;
    this.UpdateIcon();
  }
  private _model: model.Thematic = undefined;
}
