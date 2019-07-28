import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { BigSliderComponent } from './slider/big/big-slider.component';
import { ProductGalleryComponent } from './promoting/productGallery/product-gallery.component';
import { ProductsFromCategoriesComponent } from './promoting/productsFromCategories/products-from-categories.component';
import {LatestBlogComponent} from './latestBlog/latest-blog.component';
import {BrandsComponent} from './brands/brands.component';
import {SupportComponent} from './support/support.component';
import {TestimonialComponent} from './testimonial/testimonial.component';

@NgModule({
  declarations: [
    TestimonialComponent,
    SupportComponent,
    BrandsComponent,
    LatestBlogComponent,
    ProductsFromCategoriesComponent,
    HomeComponent,
    BigSliderComponent,
    ProductGalleryComponent
  ],
  imports: [
      CommonModule,
      HomeRoutingModule
  ],
  providers: []
})
export class HomeModule { }
