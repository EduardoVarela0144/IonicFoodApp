import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const apiUrl = "http://127.0.0.1:8000/api/";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(
    private http: HttpClient
  ) { }

  getFoods() {
    return this.http.get(apiUrl + 'products');
  }

  addFood(data: any) {
    console.log(data);
    return this.http.post(apiUrl + 'products', data);
  }

}
