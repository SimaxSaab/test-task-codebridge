import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get('https://api.spaceflightnewsapi.net/v3/articles')
  }
}
