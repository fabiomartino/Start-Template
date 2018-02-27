import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})

export class Page1Component implements OnInit {
  constructor(public _info: InfoService) {}

  ngOnInit() { }

}
