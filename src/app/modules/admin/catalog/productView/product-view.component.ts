import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpService} from '../../../../shared/services/http.service';
import {ENDPOINTS} from '../../../../core/endpoints';
import {Category} from '../../../../core/interfaces';
import {AdminCatalogService} from '../../services/admin-catalog.service';
import {ImageContainerComponent} from '../imageContainer/image-container.component';
import {ImageContainerDirective} from '../imageContainer/image-container.directive';

@Component({
    selector: 'app-admin-product-view',
    templateUrl: './product-view.component.html',
    styleUrls: []
})

export class ProductViewComponent implements OnInit {

    private product: FormGroup;
    private categories: Category[];
    private productId: number;
    @ViewChild(ImageContainerDirective, {static: true}) imageHost: ImageContainerDirective;

    constructor(
      public dialogRef: MatDialogRef<ProductViewComponent>,
      private http: HttpService,
      private catalogService: AdminCatalogService,
      private componentFactoryResolver: ComponentFactoryResolver
    ) { }

    ngOnInit(): void {
      this.product = new FormGroup(
        {
          id: new FormControl(this.productId),
          title: new FormControl(''),
          description: new FormControl(''),
          amount: new FormControl(''),
          price: new FormControl(''),
          image: new FormControl(''),
        }
      );

      this.loadImageContainer();

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

    closeDialog(): void {
        this.dialogRef.close();
    }
}
