import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas, IconName } from '@fortawesome/free-solid-svg-icons';
import { DataService } from 'src/app/services/data.service';
import { Languages } from 'src/app/utils/languages';
import * as model from '../../types/prismic';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  private _handleDataLoadedCallback: (data: {
    [id: string]: model.PrismicData;
  }) => void;
  public data: model.Thematic[] = [];
  public iconNames: IconName[] = [];

  constructor(private dataService: DataService, library: FaIconLibrary) {
    library.addIconPacks(fas);
    this._handleDataLoadedCallback = this.handleDataLoadedCallback.bind(this);
  }

  ngOnInit(): void {
    this.dataService.subscribeDataLoaded(this._handleDataLoadedCallback);
    this.data = this.dataService.getThematics(Languages.FRENCH);

    console.log('MainComponent-ngOnInit', { data: this.data });
  }

  ngOnDestroy(): void {
    this.dataService.unsubscribeDataLoaded(this._handleDataLoadedCallback);
  }

  private handleDataLoadedCallback(data: {
    [id: string]: model.PrismicData;
  }): void {
    if (data) {
      this.data = data[Languages.FRENCH].thematics;
      console.log('MainComponent-handleThematicsChangeCallback', {
        data: this.data,
      });
      this.UpdateIcons();
    }
  }

  private UpdateIcons() {
    if (this.data) {
      this.data.forEach((item, index) => {
        const iconName: IconName | undefined = item?.icon as IconName;
        console.log('UpdateIcon', { iconName });
        this.iconNames[index] = iconName ?? 'circle-exclamation';
      });
    }
  }
}
