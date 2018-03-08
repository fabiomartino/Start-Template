import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  moduleId: module.id.toString(),
  encapsulation: ViewEncapsulation.None,
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})

export class Page2Component implements OnInit {
  constructor(public _info: InfoService) {}

  ngOnInit() { }

}
