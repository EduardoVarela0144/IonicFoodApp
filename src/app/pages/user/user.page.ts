
import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { UserAddComponentComponent } from 'src/app/components/user-add-component/user-add-component.component';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  users: any[] = [];
  loading: any;

  constructor(
    private allUser:  UsersService,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.allUser.getUsers().subscribe((res: any) => {
      this.users = res.users;
    });
  }

  async formUser() {
    const modal = await this.modalCtrl.create({
      component: UserAddComponentComponent,
      initialBreakpoint: 0.8,
    });
    modal.onDidDismiss().then(() => {
      // this.presentLoading();
      this.getUsers();
      // this.dismissLoading();
    });
    return await modal.present();
  }

}
