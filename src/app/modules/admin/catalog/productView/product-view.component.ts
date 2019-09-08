import {Component, ComponentFactoryResolver, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpService} from '../../../../shared/services/http.service';
import {ENDPOINTS} from '../../../../core/endpoints';
import {Category, Product} from '../../../../core/interfaces';
import {AdminCatalogService} from '../../services/admin-catalog.service';
import {ImageContainerComponent} from '../imageContainer/image-container.component';
import {ImageContainerDirective} from '../imageContainer/image-container.directive';
import {ProductService} from '../services/product.service';

@Component({
    selector: 'app-admin-product-view',
    templateUrl: './product-view.component.html',
    styleUrls: []
})

export class ProductViewComponent implements OnInit {

  private productId: number;
  private product: FormGroup;
  private categories: Category[];
  @ViewChild(ImageContainerDirective, {static: true}) imageHost: ImageContainerDirective;

    constructor(
      public dialogRef: MatDialogRef<ProductViewComponent>,
      private http: HttpService,
      private catalogService: AdminCatalogService,
      private productService: ProductService,
      private componentFactoryResolver: ComponentFactoryResolver,
      @Inject(MAT_DIALOG_DATA) public data
    ) {
      this.productId = data.productId;
    }

    ngOnInit(): void {
      this.product = new FormGroup(
        {
          id: new FormControl(''),
          title: new FormControl(''),
          description: new FormControl(''),
          amount: new FormControl(''),
          price: new FormControl(''),
          image: new FormControl(''),
        }
      );

      this.loadImageContainer();
      this.loadProduct();

      this.catalogService.getAllCategories()
        .subscribe((categories: Category[]) => this.categories = categories);
    }

    save(): void {
      this.http.patch(ENDPOINTS.admin_products, this.product.value)
        .subscribe(
          response => {
            this.closeDialog();
          }
        );
    }

    onFileSelected(): void {
      const inputNode: any = document.querySelector('#file');

      if (typeof (FileReader) !== 'undefined') {
        const reader = new FileReader();

        // reader.onload = (e: any) => {
        //   this.srcResult = e.target.result;
        // };

        reader.readAsArrayBuffer(inputNode.files[0]);
      }
    }

    loadImageContainer(): void {
      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(ImageContainerComponent);
      const componentRef =
        this.imageHost.viewCointainerRef.createComponent(componentFactory);
    }

    loadProduct(): void {
      this.productService.getProduct(this.productId)
        .subscribe(
          (product: Product) => {
            this.product.patchValue(product);
          }
        );
    }

    closeDialog(): void {
        this.dialogRef.close();
    }
}
