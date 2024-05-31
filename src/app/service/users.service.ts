import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const apiUrl = 'http://127.0.0.1:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get(apiUrl + 'users');
  }


  addUser(data: any) {
    return this.http.post(apiUrl + 'users', data);
  }

 
}
