import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as prismic from '@prismicio/client';
import * as model from '../types/prismic';
import { PrismicHelper } from '../utils/prismic.helper';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _common: model.General = undefined;
  private _thematics: model.Thematic[] = [];
  private _commonCallbacks: ((data: model.General) => void)[] = [];
  private _thematicsCallbacks: ((data: model.Thematic[]) => void)[] = [];

  constructor(private httpClient: HttpClient) {
    console.log('DataService-ngOnInit');
    const endpoint = prismic.getEndpoint('jdufosse');
    const client = prismic.createClient(endpoint, {
      accessToken:
        'MC5ZcC0takJFQUFDQUF5Y2lX.77-977-977-977-9bwDvv73vv73vv73vv73vv70CP--_ve-_ve-_vSwMA--_vSHvv73vv71a77-977-977-977-9Ru-_vWVy',
    });

    this.init(client);
  }

  public getGeneral(): model.General {
    return this._common;
  }

  public getThematics(): model.Thematic[] {
    return this._thematics;
  }

  public subscribeGeneralChange(callback: (data: model.General) => void): void {
    if (callback) {
      this._commonCallbacks.push(callback);
    }
  }

  public unsubscribeGeneralChange(
    callback: (data: model.General) => void
  ): void {
    if (callback) {
      this._commonCallbacks = this._commonCallbacks.filter(
        (c) => c !== callback
      );
    }
  }

  public subscribeThematicsChange(
    callback: (data: model.Thematic[]) => void
  ): void {
    if (callback) {
      this._thematicsCallbacks.push(callback);
    }
  }

  public unsubscribeThematicsChange(
    callback: (data: model.Thematic[]) => void
  ): void {
    if (callback) {
      this._thematicsCallbacks = this._thematicsCallbacks.filter(
        (c) => c !== callback
      );
    }
  }

  private async init(client: prismic.Client): Promise<void> {
    const common = await client.getByUID<any>('common', 'common');
    if (common) {
      this._common = PrismicHelper.GetGeneral(common);
      this._commonCallbacks.forEach((callback) => {
        if (callback) {
          callback(this._common);
        }
      });
    }

    const thematics = await client.getByUID<any>('thematics', 'thematics');
    if (thematics) {
      this._thematics = PrismicHelper.GetThematics(thematics);
      this._thematicsCallbacks.forEach((callback) => {
        if (callback) {
          callback(this._thematics);
        }
      });
    }
  }
}
