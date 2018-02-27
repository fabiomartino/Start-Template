import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.scss']
})

export class Page5Component implements OnInit {
  constructor(public _info: InfoService) {}

  ngOnInit() { }

}
