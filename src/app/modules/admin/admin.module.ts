import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { AdminCatalogComponent } from './catalog/catalog.component';
import { AdminOrdersComponent } from './orders/orders.component';
import { AdminPromotingComponent } from './promoting/promoting.component';

@NgModule({
    declarations: [
        AdminComponent,
        AdminOrdersComponent,
        AdminPromotingComponent,
        AdminCatalogComponent,
        AdminDashboardComponent
    ],
  imports: [
        AdminRoutingModule,
        CommonModule,
    ],
  providers: [],
})
export class AdminModule { }
