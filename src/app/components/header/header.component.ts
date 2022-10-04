import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import * as model from 'src/app/types/prismic';
import {
  faBars,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public faBars = faBars;

  public data: model.General = undefined;
  private _handleGeneralChangeCallback: (data: model.General) => void;

  constructor(private dataService: DataService) {
    this._handleGeneralChangeCallback = this.handleGeneralChange.bind(this);
  }

  ngOnDestroy(): void {
    this.dataService.unsubscribeGeneralChange(
      this._handleGeneralChangeCallback
    );
  }

  ngOnInit(): void {
    this.dataService.subscribeGeneralChange(this._handleGeneralChangeCallback);
    this.data = this.dataService.getGeneral();

    console.log('HeaderComponent-ngOnInit', { data: this.data });
  }

  private handleGeneralChange(data: model.General): void {
    if (data) {
      this.data = data;
      console.log('HeaderComponent-handleGeneralChange', { data: this.data });
    }
  }
}
