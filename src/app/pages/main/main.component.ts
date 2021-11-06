import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import MainData from '../../../assets/data.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public data: any = MainData.thematics;
  public faCoffee = faCoffee;

  constructor() {}
}
