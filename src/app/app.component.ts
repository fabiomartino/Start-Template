import { Component } from '@angular/core';
import { InfoService } from './services/info.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public _info: InfoService) {}
}
