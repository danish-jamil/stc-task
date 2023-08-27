import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product, User } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeStoreService {
  private readonly _baseUrl = environment.apiUrl;
  private readonly _http = inject(HttpClient);
  
  constructor() {}
  
  getAllUsers(): Observable<User[]> {
    return this._http.get<User[]>(`${this._baseUrl}/users`);
  }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(`${this._baseUrl}/products`);
  }
}
