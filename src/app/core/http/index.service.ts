import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IndexService {
  private _baseUrl = env.baseUrl;
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.post(this._baseUrl, {});
  }
}
