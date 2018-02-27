import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})

export class Page3Component implements OnInit {
  constructor(public _info: InfoService) {}

  ngOnInit() { }

}
