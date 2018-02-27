import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InfoService {

  infos: any = {};
  loaded = false;

  constructor( public http: Http ) {
    this.http.get('assets/data/infos.json')
    .subscribe(data => {
      // console.log(data.json());
      this.loaded  = true;
      this.infos = data.json();
    });
  }
}
