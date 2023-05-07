import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import * as model from '../../types/data';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public faBars = faBars;

  public data: model.General = undefined;
  private _handleDataLoadedCallback: (data: model.Data) => void;

  constructor(private dataService: DataService) {
    this._handleDataLoadedCallback = this.handleDataLoadedCallback.bind(this);
  }

  ngOnDestroy(): void {
    this.dataService.unsubscribeDataLoaded(this._handleDataLoadedCallback);
  }

  ngOnInit(): void {
    this.dataService.subscribeDataLoaded(this._handleDataLoadedCallback);
    this.data = this.dataService.getGeneral();

    console.log('HeaderComponent-ngOnInit', { data: this.data });
  }

  private handleDataLoadedCallback(data: model.Data): void {
    if (data) {
      this.data = data.general;
      console.log('HeaderComponent-handleGeneralChange', { data: this.data });
    }
  }
}
