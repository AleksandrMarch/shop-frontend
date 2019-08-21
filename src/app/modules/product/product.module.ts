import { NgModule } from '@angular/core';

import { ProductComponent } from './product.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ProductComponent
    }
];

@NgModule({
    declarations: [
        ProductComponent
    ],
    imports: [RouterModule.forChild(routes)],
    providers: [],
})
export class ProductModule { }
