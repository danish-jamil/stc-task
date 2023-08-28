import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'stc-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-products.page.html',
  styleUrls: ['./admin-products.page.sass']
})
export class AdminProductsPage {

}
