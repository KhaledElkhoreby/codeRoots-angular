import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { AdsInterface } from '../interfaces/ads-interface';

@Injectable({
  providedIn: 'root',
})
export class IndexService {
  private _baseUrl = env.baseUrl;
  constructor(private http: HttpClient) {}

  getProducts(endPoint: string) {
    return this.http.post<Array<AdsInterface>>(
      `${this._baseUrl}api/${endPoint}`,
      {}
    );
  }
}
