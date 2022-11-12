import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas, IconName } from '@fortawesome/free-solid-svg-icons';
import { DataService } from 'src/app/services/data.service';
import * as model from '../../types/prismic';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  private _handleThematicsChangeCallback: (data: model.Thematic[]) => void;
  public data: model.Thematic[] = [];
  public iconNames: IconName[] = [];

  constructor(private dataService: DataService, library: FaIconLibrary) {
    library.addIconPacks(fas);
    this._handleThematicsChangeCallback =
      this.handleThematicsChangeCallback.bind(this);
  }

  ngOnInit(): void {
    this.dataService.subscribeThematicsChange(
      this._handleThematicsChangeCallback
    );
    this.data = this.dataService.getThematics();

    console.log('MainComponent-ngOnInit', { data: this.data });
  }

  ngOnDestroy(): void {
    this.dataService.unsubscribeThematicsChange(
      this._handleThematicsChangeCallback
    );
  }

  private handleThematicsChangeCallback(data: model.Thematic[]): void {
    if (data) {
      this.data = data;
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
