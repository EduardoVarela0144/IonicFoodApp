import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResturantesPageRoutingModule } from './resturantes-routing.module';

import { ResturantesPage } from './resturantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResturantesPageRoutingModule
  ],
  declarations: [ResturantesPage]
})
export class ResturantesPageModule {}
