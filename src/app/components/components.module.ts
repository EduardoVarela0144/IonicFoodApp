import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFoodComponent } from './add-food/add-food.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { UserAddComponentComponent } from './user-add-component/user-add-component.component';
@NgModule({
  declarations: [
    AddFoodComponent,
    AddCategoryComponent,
    UserAddComponentComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [
    AddFoodComponent,
    AddCategoryComponent
  ]
})
export class ComponentsModule { }
