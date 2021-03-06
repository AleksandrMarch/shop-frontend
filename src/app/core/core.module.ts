import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { CoreRoutingModule } from './core-routing.module';
import {CoreMaterialModule} from './material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';

import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { BaseLayoutComponent } from './base-layout.component';
import { ImageContainerComponent} from '../modules/admin/catalog/imageContainer/image-container.component';

// dialogs
import {ProductViewComponent} from '../modules/admin/catalog/productView/product-view.component';
import {CategoryViewComponent} from '../modules/admin/catalog/categoryView/category-view.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material';

// services
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpService} from '../shared/services/http.service';
import {AuthService} from '../shared/services/auth.service';

// directives
import {ImageContainerDirective} from '../modules/admin/catalog/imageContainer/image-container.directive';

@NgModule({
    declarations: [
      ProductViewComponent,
      CategoryViewComponent,
      CoreComponent,
      FooterComponent,
      HeaderComponent,
      MenuComponent,
      BaseLayoutComponent,
      ImageContainerDirective,
      ImageContainerComponent
    ],
    imports: [
      BrowserModule,
      CoreMaterialModule,
      BrowserAnimationsModule,
      CommonModule,
      MatDialogModule,
      CoreRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule,
    ],
    entryComponents: [
      ProductViewComponent,
      CategoryViewComponent,
      ImageContainerComponent
    ],
    providers: [
      {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
      HttpClient,
      HttpService,
      AuthService,
    ],
    bootstrap: [CoreComponent]
})
export class CoreModule { }
