import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styleUrls: ['./page6.component.scss']
})
export class Page6Component implements OnInit {
  constructor(public _info: InfoService) {}

  ngOnInit() {}
}
