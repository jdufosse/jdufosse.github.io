import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import MainData from '../../assets/data.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {
    console.log('DataService-ngOnInit');
    this.httpClient
      .get(
        'https://jdufosse.prismic.io/api/v2/documents/search?ref=Yp-70BEAACIAybxG&access_token=MTY1NDYzOTgxNzE0NS5ZcC0tU1JFQUFDTUF5Y2RY.OAFXZ--_vQzvv73vv71ubAgg77-9QFrvv73vv711QO-_vSk677-9SO-_vR3vv70G77-977-9LQA',
      )
      .subscribe(
        (response) => {
          console.log('Get data from prismic :', { response });
        },
        (error) => {
          console.log(
            'An error has occurred whime getting data from prismic :',
            { error }
          );
        }
      );
  }

  public getGeneral(): any {
    return MainData.general;
  }

  public getThematics(): any[] {
    return MainData.thematics;
  }
}
