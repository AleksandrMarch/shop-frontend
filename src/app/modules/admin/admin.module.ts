// modules
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { CoreMaterialModule } from '../../core/material.module';

// components
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
    AdminDashboardComponent,
  ],
  imports: [
    CoreMaterialModule,
    AdminRoutingModule,
    CommonModule,
  ],
  providers: [],
  exports: [
  ]
})
export class AdminModule { }
