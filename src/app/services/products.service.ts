import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly _baseUrl = environment.apiUrl;
  private readonly _uri = this._baseUrl + '/products';
  
  private readonly _http = inject(HttpClient);
  
  getCategories(): Observable<string[]> {
    return this._http.get<string[]>(`${this._uri}/categories`);
  }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(`${this._uri}`);
  }

  getProduct(id: number): Observable<Product> {
    return this._http.get<Product>(`${this._uri}/${id}`);
  }
  
  getCategoryProducts(category: string): Observable<Product[]> {
    return this._http.get<Product[]>(`${this._uri}/category/${category}`);
  }
}
