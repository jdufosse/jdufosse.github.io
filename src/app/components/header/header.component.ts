import { Component } from '@angular/core';

import MainData from '../../../assets/data.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public data: any = MainData.general;

  constructor() {}
}
