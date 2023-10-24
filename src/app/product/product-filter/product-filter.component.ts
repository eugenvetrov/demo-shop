import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent {
  productFilterForm = new FormGroup({
    name: new FormControl(''),
    category: new FormControl(''),
  });

  ngOnInit() {
    this.productFilterForm.setValue({
      name: 'name',
      category: 'category'
    })
  }
}
