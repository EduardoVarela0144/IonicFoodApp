import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantesService } from './../service/restaurantes.service';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.page.html',
  styleUrls: ['./restaurante.page.scss'],
})
export class RestaurantePage implements OnInit {
  restauranteId: number | undefined;
  restaurante: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantesService
  ) {}

  ngOnInit() {
    // Obtener el ID del restaurante de la URL
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.restauranteId = +id;
      this.getRestauranteDetalle();
    }
  }

  getRestauranteDetalle() {
    if (this.restauranteId) {
      this.restaurantService.getRestauranteDetalle(this.restauranteId).subscribe((res: any) => {
        this.restaurante = res.restaurante;
        console.log(res)
      });
    }
  }
}
