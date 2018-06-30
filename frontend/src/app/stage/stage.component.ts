import { Component, OnInit } from '@angular/core';
import { Constants } from "../objects/Constants";

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
  currentPage: string = Constants.START;
  constants = Constants;

  constructor() { }

  ngOnInit() {
  }

}
