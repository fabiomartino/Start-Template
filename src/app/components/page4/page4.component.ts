import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})

export class Page4Component implements OnInit {
  constructor(public _info: InfoService) {}

  ngOnInit() { }

}
