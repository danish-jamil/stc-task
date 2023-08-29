import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ProductsService } from 'src/app/services';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Product } from 'src/app/types';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { EditProductDialog } from '../../dialogs';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'stc-product-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass'],
})
export class ProductListComponent {
  private readonly _productsService = inject(ProductsService);
  private readonly _dialog = inject(Dialog);
  private readonly _destroyRef = inject(DestroyRef);

  dataSource$ = this._productsService.getProducts();
  columns: string[] = ['id', 'title', 'price', 'rating', 'description'];

  editButtonClicked(product: Product) {
    console.log(product);
    this.openDialog(product);
  }

  deleteButtonClicked(product: Product) {
    console.log(product);
  }

  openDialog(product: Product): void {
    const dialogRef = this._dialog.open(EditProductDialog, {
      data: product,
    });

    dialogRef.closed
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((result) => {
        console.log('The dialog was closed');
      });
  }
}
