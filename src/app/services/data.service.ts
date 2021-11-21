import { Injectable } from '@angular/core';
import MainData from '../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  public getGeneral(): any {
    return MainData.general;
  }

  public getThematics(): any[] {
    return MainData.thematics;
  }
}
