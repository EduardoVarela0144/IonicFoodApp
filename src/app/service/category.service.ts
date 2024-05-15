import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiUrl = "http://127.0.0.1:8000/api/";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  getCategorias() {
    return this.http.get(apiUrl + 'categorias');
  }

  addCategoria(data: any) {
    console.log(data);
    return this.http.post(apiUrl + 'categorias', data);
  }
}
