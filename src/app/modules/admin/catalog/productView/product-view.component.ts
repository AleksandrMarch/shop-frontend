import {Component, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpService} from '../../../../shared/services/http.service';
import {ENDPOINTS} from '../../../../core/endpoints';

@Component({
    selector: 'app-admin-product-view',
    templateUrl: './product-view.component.html',
    styleUrls: []
})

export class ProductViewComponent implements OnInit {

    private product: FormGroup;

    constructor(
      public dialogRef: MatDialogRef<ProductViewComponent>,
      private http: HttpService
    ) { }

    ngOnInit(): void {
      this.product = new FormGroup(
        {
          title: new FormControl(''),
          description: new FormControl(''),
          amount: new FormControl(''),
          price: new FormControl(''),
          image: new FormControl(''),
        }
      );
    }

    save(): void {
      const headers = {'Content-Type': 'application/json'};
      this.http.post(ENDPOINTS.admin_product, this.product.value, headers)
        .subscribe(
          response => {
            console.log(response);
            this.closeDialog();
          }
        );
    }

    closeDialog(): void {
        this.dialogRef.close();
    }
}
