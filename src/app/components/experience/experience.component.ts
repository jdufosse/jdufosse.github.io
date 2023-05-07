import { Component, OnInit, Input } from '@angular/core';
import * as faIcons from '@fortawesome/free-solid-svg-icons';
import * as model from '../../types/data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  public displayContent = true;
  public headerIcon = this.displayContent
    ? faIcons['faCaretDown']
    : faIcons['faCaretLeft'];

  constructor() {}

  ngOnInit(): void {}

  dateToString(stringDate: string): string {
    const date = new Date(stringDate);

    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
    }).format(date);
  }

  onToggleDisplayContent(): any {
    console.log('toggleDisplayContent');
    this.displayContent = !this.displayContent;
    this.headerIcon = this.displayContent
      ? faIcons['faCaretDown']
      : faIcons['faCaretLeft'];
  }

  @Input()
  get model(): model.Experience {
    return this._model;
  }
  set model(model: model.Experience) {
    this._model = model;
  }
  private _model: model.Experience = undefined;
}
