import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseLayoutComponent } from './base-layout.component';

const routes: Routes = [
    {
        path: '',
        component: BaseLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: '../modules/home/home.module#HomeModule'
            },
            {
                path: 'category',
                loadChildren: '../modules/category/category.module#CategoryModule'
            },
            {
                path: 'product',
                loadChildren: '../modules/product/product.module#ProductModule'
            },
            {
                path: 'checkout',
                loadChildren: '../modules/checkout/checkout.module#CheckoutModule'
            },
            {
              path: 'user',
              loadChildren: '../modules/user/user.module#UserModule'
            }
        ]
    },
    {
        path: 'admin',
        children: [
            {
                path: '',
                loadChildren: '../modules/admin/admin.module#AdminModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
