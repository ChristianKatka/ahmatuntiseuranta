import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthHTTPService } from './auth-http.service';
import { environment } from '../../environments/environment';
import { ProductDraft, Product } from 'src/shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private authHttp: AuthHTTPService) {}

  getAllProducts(): Observable<Product[]> {
    return this.authHttp.get(`${environment.apiBaseUrl}/products`);
  }

  createProduct(product: any): Observable<any> {
    return this.authHttp.post(`${environment.apiBaseUrl}/products`, product);
  }

  updateProduct(product: any): Observable<any> {
    return this.authHttp.put(
      `${environment.apiBaseUrl}/products/${product.id}`,
      product
    );
  }

  deleteProduct(productId: string): Observable<{ id: string }> {
    return this.authHttp.delete(
      `${environment.apiBaseUrl}/products/${productId}`
    );
  }
}
