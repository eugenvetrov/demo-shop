import { Component, Input } from '@angular/core';
import { ProductCartService } from '@app/product/services/cart/product-cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product = {} as Product;

  constructor (
    private productCartService: ProductCartService
  ) {}

  handleAddClick() {
    this.productCartService.addProductToCart(this.product)
  }

  handleRemoveClick() {
    this.productCartService.removeProductFromCart(this.product)
  }
}
