import { Component, Inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EditProductDialogData } from '../../types';

@Component({
  selector: 'stc-edit-product',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgIf,
    MatDialogModule,
  ],
  templateUrl: './edit-product.dialog.html',
  styleUrls: ['./edit-product.dialog.sass'],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}
    }
  ]
})
export class EditProductDialog {
  constructor(
    public dialogRef: MatDialogRef<EditProductDialog>,
    @Inject(MAT_DIALOG_DATA) public data: EditProductDialogData,
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
