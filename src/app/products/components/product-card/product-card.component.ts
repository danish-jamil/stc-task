import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../types';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'stc-product-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    NgOptimizedImage,
    MatIconModule,
  ],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass'],
  host: {
    class: 'stc-product-card',
  },
})
export class ProductCardComponent {
  private _product!: Product;

  @Input({ required: true })
  set product(value: Product) {
    this._product = value;
    for (let i = 0; i < this._product.rating.rate; i++) {
      this.starsCount.push(i);
    }
  }
  get product() {
    return this._product;
  }

  starsCount: Number[] = [];
}
