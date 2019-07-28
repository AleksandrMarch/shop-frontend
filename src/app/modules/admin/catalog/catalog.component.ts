import { Component } from '@angular/core';
import { ProductViewComponent } from './productView/product-view.component';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'app-admin-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: []
})
export class AdminCatalogComponent {

  constructor(public dialog: MatDialog) { }

  openProductDialog() {
      const dialogRef = this.dialog.open(ProductViewComponent, {
            height: '400px',
            width: '600px',
        });
    }

}
