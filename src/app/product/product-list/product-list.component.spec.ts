import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { ProductApiService } from '../services/api/product-api.service';
import { StoreModule } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(), NoopAnimationsModule],
      declarations: [ProductListComponent],
      providers: [
        ProductApiService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: { categoryId: 1 }  
            }
          }    
        }
      ]
    });
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
