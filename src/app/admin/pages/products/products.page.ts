import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'stc-admin-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.sass']
})
export class ProductsPage {

}
