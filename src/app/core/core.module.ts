import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { CoreRoutingModule } from './core-routing.module';
import {CoreMaterialModule} from './material.module';

import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { BaseLayoutComponent } from './base-layout.component';

// dialogs
import {ProductViewComponent} from '../modules/admin/catalog/productView/product-view.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material';

@NgModule({
    declarations: [
        ProductViewComponent,
        ProductViewComponent,
        CoreComponent,
        FooterComponent,
        HeaderComponent,
        MenuComponent,
        BaseLayoutComponent
    ],
    imports: [
        CoreMaterialModule,
        BrowserAnimationsModule,
        CommonModule,
        MatDialogModule,
        BrowserModule,
        CoreRoutingModule
    ],
    entryComponents: [ProductViewComponent],
    providers: [
        {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
    ],
    bootstrap: [CoreComponent]
})
export class CoreModule { }
