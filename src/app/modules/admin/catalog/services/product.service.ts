import {Injectable} from '@angular/core';
import {HttpService} from '../../../../shared/services/http.service';
import {ENDPOINTS} from '../../../../core/endpoints';
import {Product} from '../../../../core/interfaces';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  PRODUCT_STATUS_TEMPORARY = 'TEMPORARY';

  constructor(
    private http: HttpService
  ) {}

  createTemporaryProduct(): Observable<number> {

    const product = <Product> {
      title: 'temp',
      status: this.PRODUCT_STATUS_TEMPORARY,
    };

    return this.http.post<number>(ENDPOINTS.admin_products, product);
  }

  getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(ENDPOINTS.admin_products + '/' + productId);
  }
}
