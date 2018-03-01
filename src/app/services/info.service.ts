import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InfoService {

  infos: any = {};
  loaded = false;

  constructor( public http: HttpClient ) {
    this.http.get('assets/data/infos.json')
    .subscribe(data => {
      // console.log(data.json());
      this.loaded  = true;
      this.infos = data;
    });
  }
}
