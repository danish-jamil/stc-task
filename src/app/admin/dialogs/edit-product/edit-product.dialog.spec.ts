import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductDialog } from './edit-product.dialog';

describe('EditProductDialog', () => {
  let component: EditProductDialog;
  let fixture: ComponentFixture<EditProductDialog>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EditProductDialog]
    });
    fixture = TestBed.createComponent(EditProductDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
