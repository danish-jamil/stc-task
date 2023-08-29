import { Component, Inject, Optional } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EditProductDialogData } from '../../types';

@Component({
  selector: 'stc-edit-product',
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  templateUrl: './edit-product.dialog.html',
  styleUrls: ['./edit-product.dialog.sass'],
})
export class EditProductDialog {
  constructor(
    @Optional() public dialogRef: MatDialogRef<EditProductDialog>,
    @Optional() @Inject(MAT_DIALOG_DATA) public product: EditProductDialogData
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
