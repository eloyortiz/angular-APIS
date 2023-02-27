import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Product } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URL = 'https://young-sands-07814.herokuapp.com/api/products';

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL);
  }

  getProduct(id: string ): Observable<Product>{
    return this.http.get<Product>(`${this.API_URL}/${id}`);
  }

}
