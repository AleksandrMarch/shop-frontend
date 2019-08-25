import {Component, OnInit} from '@angular/core';
import { ProductViewComponent } from './productView/product-view.component';
import {MatDialog} from '@angular/material';
import {HttpService} from '../../../shared/services/http.service';
import {ENDPOINTS} from '../../../core/endpoints';
import {Product} from '../../../core/interfaces';
import {CategoryViewComponent} from './categoryView/category-view.component';

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
  ) {}

  ngOnInit() {
    this.loadProductList();
  }

  openProductDialog() {
      const dialogRef = this.dialog.open(ProductViewComponent, {
            height: '400px',
            width: '600px',
        });
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
