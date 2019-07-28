import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-admin-product-view',
    templateUrl: './product-view.component.html',
    styleUrls: []
})

export class ProductViewComponent {
    constructor(public dialogRef: MatDialogRef<ProductViewComponent>) { }

    closeDialog(): void {
        this.dialogRef.close();
    }
}
