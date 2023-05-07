import { Injectable } from '@angular/core';
import * as model from '../types/data';
import { Languages, loadDataRecursively } from '../utils/languages';

import data from 'src/assets/data.json';
import images from 'src/assets/data/image.json';
import english from 'src/assets/data/culture.en-gb.json';
import french from 'src/assets/data/culture.fr-fr.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _data: { [id: string]: model.Data } = {
    french: { ...data },
    english: { ...data },
  };
  private _dataCallbacks: ((data: model.Data) => void)[] = [];
  private _language: Languages = Languages.FRENCH;

  constructor() {
    console.log('DataService-ngOnInit');
    this.init();
  }

  public getLanguage(): Languages {
    return this._language;
  }

  public setLanguage(language: Languages): void {
    if (this._language !== language) {
      this._language = language;
      this.raiseDataLoaded();
    }
  }

  public getData(): model.Data {
    return this._data[this._language];
  }

  public getGeneral(): model.General {
    return this._data[this._language]?.general;
  }

  public getThematics(): model.Thematic[] {
    return this._data[this._language]?.thematics;
  }

  public subscribeDataLoaded(callback: (data: model.Data) => void): void {
    if (callback) {
      this._dataCallbacks.push(callback);
    }
  }

  public unsubscribeDataLoaded(callback: (data: model.Data) => void): void {
    if (callback) {
      this._dataCallbacks = this._dataCallbacks.filter((c) => c !== callback);
    }
  }

  private raiseDataLoaded(): void {
    this._dataCallbacks.forEach((callback) => {
      if (callback) {
        callback(this._data[this._language]);
      }
    });
  }

  private init(): void {
    console.log('init', { data: this._data });
    Object.values(Languages).forEach((language) => {
      this.loadDataByLanguage(this._data[language], language);
    });

    console.log('init done', { data: this._data });
    this.raiseDataLoaded();
  }

  private loadDataByLanguage(data: model.Data, language: Languages): void {
    const languageData = this.getLanguageData(language);
    if (!languageData) {
      console.error('loadDataByLanguage - No language data');
      return;
    }

    loadDataRecursively(data, languageData, images);
  }

  private getLanguageData(language: Languages): any {
    switch (language) {
      case Languages.ENGLISH:
        return english;
      case Languages.FRENCH:
      default:
        return french;
    }
  }
}
