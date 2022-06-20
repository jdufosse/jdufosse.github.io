import { Component, OnInit, OnDestroy } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
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
  public faCoffee = faCoffee;

  constructor(private dataService: DataService) {
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
    }
  }
}
