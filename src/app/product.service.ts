import { Injectable } from '@angular/core';
import { HttpModule,Http,Response } from '@angular/http';
import { getLocaleNumberSymbol } from '@angular/common';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {Album} from './album';
@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json'
  constructor(private _http: Http) {
    
  }
  getAlbum(id:number): Observable<Album>{
    return this._http.get(this._albumUrl).map((Response)=><Album>Response.json());
  }

}
