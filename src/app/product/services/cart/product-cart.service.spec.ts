import { TestBed } from '@angular/core/testing';

import { ProductCartService } from './product-cart.service';
import { StoreModule } from '@ngrx/store';

describe('ProductCartService', () => {
  let service: ProductCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot()
      ]
    });
    service = TestBed.inject(ProductCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
