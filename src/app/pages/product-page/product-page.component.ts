import { ModalService } from './../../services/modal.service';
import { ProductsService } from 'src/app/services/productsService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  title = 'My First Angular app';
  loading = false;
  filter = '';

  constructor(
    public productsServices: ProductsService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.productsServices.getAll().subscribe(() => {
      this.loading = false;
    });
  }
}
