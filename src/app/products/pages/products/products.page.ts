import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FakeStoreService } from 'src/app/services';
import { ProductCardComponent } from '../../components';
import { Product } from 'src/app/types';

@Component({
  standalone: true,
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.sass'],
  imports: [CommonModule, ProductCardComponent]
})
export class ProductsPage {
  private readonly _fakeStoreService = inject(FakeStoreService);

  trackById(product: Product) {
    return product ? product.id: 0;
  }

  $users = this._fakeStoreService.getAllUsers();
  $products = this._fakeStoreService.getProducts();
}
