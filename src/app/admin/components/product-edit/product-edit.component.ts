import { Component, DestroyRef, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
  RouterModule,
} from '@angular/router';
import { catchError, map, of, tap } from 'rxjs';
import { Product } from 'src/app/types';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProductsService } from 'src/app/services';

@Component({
  selector: 'stc-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.sass'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
})
export class ProductEditComponent {
  private readonly _fb = inject(FormBuilder);
  private readonly _route = inject(ActivatedRoute);
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _productsService = inject(ProductsService);
  private readonly _router = inject(Router);

  productForm = this._fb.group({
    id: [0],
    title: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', Validators.required],
    price: [0, Validators.required],
  });

  hasUnitNumber = false;

  constructor() {
    this._route.data
      .pipe(
        map((data) => data['product']),
        tap((product) => {
          console.log(product);
          this.patchForm(product);
        }),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  }

  patchForm(product: Partial<Product>) {
    this.productForm.patchValue(product);
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this._productsService
        .updateProduct(this.productForm.value as Product)
        .pipe(
          tap((response) => {
            if (response) {
              this._router.navigate(['/admin/products']);
            }
          }),
          catchError((error) => {
            if (error) {
              alert('There was an error updating the product');
            }
            return of(null);
          }),
          takeUntilDestroyed(this._destroyRef)
        )
        .subscribe();
    }
  }
}
