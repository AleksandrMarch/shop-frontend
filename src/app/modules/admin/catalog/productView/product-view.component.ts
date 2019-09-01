import {Component, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpService} from '../../../../shared/services/http.service';
import {ENDPOINTS} from '../../../../core/endpoints';
import {Category} from '../../../../core/interfaces';
import {AdminCatalogService} from '../../services/admin-catalog.service';

@Component({
    selector: 'app-admin-product-view',
    templateUrl: './product-view.component.html',
    styleUrls: []
})

export class ProductViewComponent implements OnInit {

    private product: FormGroup;
    private categories: Category[];

    constructor(
      public dialogRef: MatDialogRef<ProductViewComponent>,
      private http: HttpService,
      private catalogService: AdminCatalogService
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

      this.catalogService.getAllCategories()
        .subscribe((categories: Category[]) => this.categories = categories);
    }

    save(): void {
      const headers = {'Content-Type': 'application/json'};
      this.http.post(ENDPOINTS.admin_products, this.product.value, headers)
        .subscribe(
          response => {
            this.closeDialog();
          }
        );
    }

    onFileSelected() {
      const inputNode: any = document.querySelector('#file');

      if (typeof (FileReader) !== 'undefined') {
        const reader = new FileReader();

        // reader.onload = (e: any) => {
        //   this.srcResult = e.target.result;
        // };

        reader.readAsArrayBuffer(inputNode.files[0]);
      }
    }

    closeDialog(): void {
        this.dialogRef.close();
    }
}
