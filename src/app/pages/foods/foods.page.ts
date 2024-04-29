import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddFoodComponent } from 'src/app/components/add-food/add-food.component';
import { FoodService } from 'src/app/service/food.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.page.html',
  styleUrls: ['./foods.page.scss'],
})
export class FoodsPage implements OnInit {
  foods: any[] = [];

  constructor(
    private allFood: FoodService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.getFoods();
  }

  getFoods() {
    this.allFood.getFoods().subscribe((res: any) => {
      this.foods = res.productos;
    });
  }

  async formFood() {
    const modal = await this.modalCtrl.create({
      component: AddFoodComponent,
      initialBreakpoint: 0.8,
    });
    modal.onDidDismiss().then(() => {
      this.getFoods();
    });
    return await modal.present();
  }
}
