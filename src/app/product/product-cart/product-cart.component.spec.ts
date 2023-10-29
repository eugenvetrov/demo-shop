import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartComponent } from './product-cart.component';
import { StoreModule } from '@ngrx/store';

describe('ProductCartComponent', () => {
  let component: ProductCartComponent;
  let fixture: ComponentFixture<ProductCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot()
      ],
      declarations: [ProductCartComponent]
    });
    fixture = TestBed.createComponent(ProductCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
