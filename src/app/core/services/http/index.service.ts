import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { AdsInterface } from '../../interfaces/ads-interface';

@Injectable({
  providedIn: 'root',
})
export class IndexService {
  private _baseUrl = env.baseUrl;
  constructor(private http: HttpClient) {}

  getMainSlider() {
    const endPoint = 'MobileMainPage/GetMainSliders';
    return this.http.post<Array<AdsInterface>>(
      `${this._baseUrl}api/${endPoint}`,
      {}
    );
  }

  getCategories() {
    const endPoint = 'Categories/index';
    return this.http.post(`${this._baseUrl}api/${endPoint}`, {});
  }
}
