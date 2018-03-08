import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  moduleId: module.id.toString(),
  encapsulation: ViewEncapsulation.None,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  implements OnInit {
  constructor(public _info: InfoService) {}

  ngOnInit() { }

}
