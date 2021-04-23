import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import MainData from '../../assets/main/data.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public data : any = MainData;
  public faCoffee = faCoffee;

  constructor() { }

  ngOnInit(): void {
    console.log(MainData);
  }

}
