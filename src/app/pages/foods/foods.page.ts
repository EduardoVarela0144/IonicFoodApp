import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { AddFoodComponent } from 'src/app/components/add-food/add-food.component';
import { FoodService } from 'src/app/service/food.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.page.html',
  styleUrls: ['./foods.page.scss'],
})
export class FoodsPage implements OnInit {
  foods: any[] = [];
  loading: any;

  constructor(
    private allFood: FoodService,
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
    this.presentLoading();
    this.getFoods();
  }

  getFoods() {
    this.allFood.getFoods().subscribe((res: any) => {
      this.foods = res.products;
      this.dismissLoading();
    });
  }

  async formFood() {
    const modal = await this.modalCtrl.create({
      component: AddFoodComponent,
      initialBreakpoint: 0.8,
    });
    modal.onDidDismiss().then(() => {
      this.presentLoading();
      this.getFoods();
      this.dismissLoading();
    });
    return await modal.present();
  }
}
