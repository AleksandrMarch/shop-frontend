import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import {AdminOrdersComponent} from './orders/orders.component';
import {AdminCatalogComponent} from './catalog/catalog.component';
import {AdminPromotingComponent} from './promoting/promoting.component';
import {AdminDashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                component: AdminDashboardComponent
            },
            {
                path: 'orders',
                component: AdminOrdersComponent
            },
            {
                path: 'catalog',
                component: AdminCatalogComponent
            },
            {
                path: 'promoting',
                component: AdminPromotingComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
