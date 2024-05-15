
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/service/category.service';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent  implements OnInit {

  categoryForm: FormGroup = new FormGroup({});

  constructor(
    private modalCtrl: ModalController,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required],
      
    });
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

  addcategory() {
    if (this.categoryForm.valid) {

      this.categoryService.addCategoria(this.categoryForm.value).subscribe(() => {
        this.closeModal();
      });
    } else {
      this.categoryForm.markAllAsTouched();
    }
  }

}
