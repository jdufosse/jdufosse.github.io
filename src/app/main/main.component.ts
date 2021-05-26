import { Component, OnInit } from '@angular/core';
import { faCoffee, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import MainData from '../../assets/main/data.json';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public data: any = MainData;
  public faCoffee = faCoffee;
  public faStar = faStar;
  public faStarHalfAlt = faStarHalfAlt;
  public farStar = farStar;

  constructor() { }

  ngOnInit(): void {
    console.log(MainData);
  }

}
