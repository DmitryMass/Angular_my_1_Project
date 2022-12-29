import { ModalService } from './../../services/modal.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/productsService';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private productService: ProductsService,
    private modalService: ModalService
  ) {}

  //  для того чтоб обратится к полю ошибок через *ngIf="title.errors"
  get title() {
    return this.form.controls.title as FormControl;
  }

  // стриму всегд нужен слушатель
  submit() {
    this.productService
      .create({
        title: this.form.value.title as string,
        price: 13.5,
        description: 'Some Description',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
          rate: 4,
          count: 1,
        },
      })
      .subscribe(() => {
        this.modalService.close();
      });
  }

  ngOnInit(): void {}
}
