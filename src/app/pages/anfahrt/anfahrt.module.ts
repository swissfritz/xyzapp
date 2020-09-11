import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnfahrtPageRoutingModule } from './anfahrt-routing.module';

import { AnfahrtPage } from './anfahrt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnfahrtPageRoutingModule
  ],
  declarations: [AnfahrtPage]
})
export class AnfahrtPageModule {}
