import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RestaurantesService } from './../../service/restaurantes.service';

@Component({
  selector: 'app-resturantes',
  templateUrl: './resturantes.page.html',
  styleUrls: ['./resturantes.page.scss'],
})
export class ResturantesPage implements OnInit {
  Restaurantes: any[] = [];

  constructor(
    private navCtrl: NavController,
    private allRestaurant: RestaurantesService
  ) {}

  ngOnInit() {
    this.getRestaurantes();
  }

  getRestaurantes() {
    this.allRestaurant.getRestaurantes().subscribe((res: any) => {
      this.Restaurantes = res.restaurants;
    });
  }

  verDetalleRestaurante(id: number) {
    this.navCtrl.navigateForward('/restaurante/' + id);
  }
}
