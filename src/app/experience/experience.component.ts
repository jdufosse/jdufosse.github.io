import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  get experience(): any { return this._experience; }
  set experience(experience: any) {
    this._experience = experience;
  }
  private _experience = null;

  @Input()
  get index(): number { return this._index; }
  set index(index: number) {
    this._index = index;
  }
  private _index = 0;
}
