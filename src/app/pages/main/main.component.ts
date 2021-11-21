import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit{
  public data: any[] = [];
  public faCoffee = faCoffee;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.data = this.dataService.getThematics();
  }
}
