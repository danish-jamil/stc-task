import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductsService } from 'src/app/services';
import { ProductCardComponent } from '../../components';
import { Product } from 'src/app/types';
import { NavigationComponent } from 'src/app/navigation';
import { BehaviorSubject, filter, switchMap, tap } from 'rxjs';

@Component({
  standalone: true,
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.sass'],
  imports: [CommonModule, ProductCardComponent, NavigationComponent],
})
export class ProductsPage {
  private readonly _productsService = inject(ProductsService);
  
  category$ = new BehaviorSubject<string>('');

  categories$ = this._productsService.getCategories().pipe(
    filter(Boolean),
    tap((categories) => this.category$.next(categories[0]))
  );

  products$ = this.category$.pipe(
    switchMap((category) => this._productsService.getCategoryProducts(category))
  );

  onCategorySelected(category: string) {
    this.category$.next(category);
  }
}
