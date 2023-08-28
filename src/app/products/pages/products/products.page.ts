import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductsService } from 'src/app/services';
import { ProductCardComponent } from '../../components';
import { Product } from 'src/app/types';
import { NavigationComponent } from 'src/app/navigation';

@Component({
  standalone: true,
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.sass'],
  imports: [CommonModule, ProductCardComponent, NavigationComponent]
})
export class ProductsPage {
  private readonly _productsService = inject(ProductsService);
  
  $products = this._productsService.getProducts();

  goToProductDetail(product: Product) {
    console.log(product);
  }
}
