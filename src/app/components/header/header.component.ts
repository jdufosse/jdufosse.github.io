import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import * as model from 'src/app/types/prismic';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Languages } from 'src/app/utils/languages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public faBars = faBars;

  public data: model.General = undefined;
  private _handleDataLoadedCallback: (data: {
    [id: string]: model.PrismicData;
  }) => void;

  constructor(private dataService: DataService) {
    this._handleDataLoadedCallback = this.handleDataLoadedCallback.bind(this);
  }

  ngOnDestroy(): void {
    this.dataService.unsubscribeDataLoaded(this._handleDataLoadedCallback);
  }

  ngOnInit(): void {
    this.dataService.subscribeDataLoaded(this._handleDataLoadedCallback);
    this.data = this.dataService.getGeneral(Languages.FRENCH);

    console.log('HeaderComponent-ngOnInit', { data: this.data });
  }

  private handleDataLoadedCallback(data: {
    [id: string]: model.PrismicData;
  }): void {
    if (data) {
      this.data = data[Languages.FRENCH].general;
      console.log('HeaderComponent-handleGeneralChange', { data: this.data });
    }
  }
}
