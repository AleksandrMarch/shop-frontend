import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BannerComponent} from './banner/banner.component';
import {SubscribeComponent} from './subscribe/subscribe.component';

@NgModule({
  declarations: [
    BannerComponent,
    SubscribeComponent,
  ],
  imports: [],
  providers: []
})
export class SharedModule { }
