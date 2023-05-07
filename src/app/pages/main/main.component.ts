import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas, IconName } from '@fortawesome/free-solid-svg-icons';
import { DataService } from 'src/app/services/data.service';
import { Languages } from 'src/app/utils/languages';
import * as model from '../../types/data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  private _handleDataLoadedCallback: (data: model.Data) => void;
  public data: model.Thematic[] = [];
  public iconNames: IconName[] = [];
  public language: Languages = Languages.FRENCH;

  constructor(
    private router: Router,
    private dataService: DataService,
    library: FaIconLibrary
  ) {
    this.dataService.setLanguage(
      router.url.includes('en') ? Languages.ENGLISH : Languages.FRENCH
    );
    library.addIconPacks(fas);
    this._handleDataLoadedCallback = this.handleDataLoadedCallback.bind(this);
  }

  ngOnInit(): void {
    this.dataService.subscribeDataLoaded(this._handleDataLoadedCallback);
    this.handleDataLoadedCallback(this.dataService.getData());

    console.log('MainComponent-ngOnInit', { data: this.data });
  }

  ngOnDestroy(): void {
    this.dataService.unsubscribeDataLoaded(this._handleDataLoadedCallback);
  }

  private handleDataLoadedCallback(data: model.Data): void {
    if (data) {
      this.data = data.thematics;
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
