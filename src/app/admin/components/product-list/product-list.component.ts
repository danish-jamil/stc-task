import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table'; 
import { ProductsService } from 'src/app/services';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'stc-product-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent {
  private readonly _productsService = inject(ProductsService);

  dataSource$ = this._productsService.getProducts();
  columns: string[] = ['id', 'title', 'price', 'rating', 'description'];
}
