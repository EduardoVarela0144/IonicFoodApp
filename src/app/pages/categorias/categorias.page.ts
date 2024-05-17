import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { AddCategoryComponent } from 'src/app/components/add-category/add-category.component';

import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  Categories: any[] = [];
  loading: any;

  constructor(
    private allCategory: CategoryService,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController
  ) {}

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Cargando...',
    });
    await this.loading.present();
  }

  async dismissLoading() {
    if (this.loading) {
      await this.loading.dismiss();
    }
  }

  ngOnInit() {
    // this.presentLoading();
    this.getCategories();
  }

  getCategories() {
    this.allCategory.getCategorias().subscribe((res: any) => {
      this.Categories = res.categorias;
      this.dismissLoading();
    });
  }

  async formCategory() {
    const modal = await this.modalCtrl.create({
      component: AddCategoryComponent,
      initialBreakpoint: 0.8,
    });
    modal.onDidDismiss().then(() => {
      this.presentLoading();
      this.getCategories();
      this.dismissLoading();
    });
    return await modal.present();
  }

}
