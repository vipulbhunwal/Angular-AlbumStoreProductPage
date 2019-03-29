import { Injectable } from '@angular/core';
import { HttpModule,Http,Response } from '@angular/http';
import { getLocaleNumberSymbol } from '@angular/common';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json'
  constructor(private _http: Http) {
    
  }
  getAlbum(id:number){
    return this._http.get(this._albumUrl).map((Response)=>Response.json());
  }

}
