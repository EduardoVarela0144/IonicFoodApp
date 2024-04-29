import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoodService } from 'src/app/service/food.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss'],
})
export class AddFoodComponent implements OnInit {
  foodForm: FormGroup = new FormGroup({});

  constructor(
    private modalCtrl: ModalController,
    private foodService: FoodService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.foodForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: [null, Validators.required],
      description: ['', Validators.required],
      // imageUrl: ['', Validators.required],
    });
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

  addFood() {
    if (this.foodForm.valid) {

      this.foodService.addFood(this.foodForm.value).subscribe(() => {
        this.closeModal();
      });
    } else {
      this.foodForm.markAllAsTouched();
    }
  }
}
