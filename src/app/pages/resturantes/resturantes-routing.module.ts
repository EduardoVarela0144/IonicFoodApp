import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResturantesPage } from './resturantes.page';

const routes: Routes = [
  {
    path: '',
    component: ResturantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResturantesPageRoutingModule {}
