import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-user-add-component',
  templateUrl: './user-add-component.component.html',
  styleUrls: ['./user-add-component.component.scss'],
})
export class UserAddComponentComponent  implements OnInit {

  userForm: FormGroup = new FormGroup({});

  constructor(
    private modalCtrl: ModalController,
    private userService: UsersService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

  addUser() {
    if (this.userForm.valid) {

      this.userService.addUser(this.userForm.value).subscribe(() => {
        this.closeModal();
      });
    } else {
      this.userForm.markAllAsTouched();
    }
  }

}
