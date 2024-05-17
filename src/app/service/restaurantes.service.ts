import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const apiUrl = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'root',
})
export class RestaurantesService {
  constructor(private http: HttpClient) {}
  getRestaurantes() {
    return this.http.get(apiUrl + 'restaurantes');
  }

  getRestauranteDetalle(id: number) {
    return this.http.get(apiUrl + 'restaurantes/' + id);
  }
}
