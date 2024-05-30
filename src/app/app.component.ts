import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Foods', url: '/foods', icon: 'fast-food' },
    { title: 'Categorías', url: '/categorias', icon: 'archive' },
    { title: 'Restaurantes', url: '/resturantes', icon: 'beer' },
    { title: 'Usuarios', url: '/users', icon: 'person' },
  ];
  constructor() {}
}
