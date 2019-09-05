import {Component, OnInit} from '@angular/core';
import { ProductViewComponent } from './productView/product-view.component';
import {MatDialog} from '@angular/material';
import {HttpService} from '../../../shared/services/http.service';
import {ENDPOINTS} from '../../../core/endpoints';
import {Product} from '../../../core/interfaces';
import {CategoryViewComponent} from './categoryView/category-view.component';
import {ProductService} from './services/product.service';

@Component({
    selector: 'app-admin-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: []
})
export class AdminCatalogComponent implements OnInit {

  public productList: Product[];

  constructor(
    public dialog: MatDialog,
    private http: HttpService,
    private productService: ProductService,
  ) {}

  ngOnInit() {
    this.loadProductList();
  }

  openProductDialog(productId: number) {
    const dialogRef = this.dialog.open(ProductViewComponent, {
      height: '400px',
      width: '600px',
      data: {productId: productId},
    });
  }

  createProduct() {
    this.productService.createTemporaryProduct()
      .subscribe(
        (productId: number) => {
          this.openProductDialog(productId);
        }
      )
  }

  openCategoryDialog() {
    const dialogRef = this.dialog.open(CategoryViewComponent, {
      height: '400px',
      width: '600px',
    });
  }

  loadProductList() {
    this.http.get<Product[]>(ENDPOINTS.admin_products)
      .subscribe(
        (response: Product[]) => {
          this.productList = response;
        }
      );
  }

  deleteProduct(id: number) {
    this.http.delete(ENDPOINTS.admin_products + '/' + id)
      .subscribe(
          response => console.log(response)
      );
  }

}
