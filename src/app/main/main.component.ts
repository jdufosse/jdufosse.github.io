import { Component, OnInit } from '@angular/core';

import MainData from '../../assets/main/data.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(MainData);
  }

}
