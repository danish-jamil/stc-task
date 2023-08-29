import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductsService } from 'src/app/services';
import { Product } from 'src/app/types';

export const productResolver: ResolveFn<Product> = (route, state) => {
  const _productsService = inject(ProductsService);
  
  const productId = Number(route.paramMap.get('id'));

  return _productsService.getProduct(productId);
};
