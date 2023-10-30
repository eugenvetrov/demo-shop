import { Injectable } from "@angular/core";
import { productCartSelector } from "@app/stores/product/product.selectors";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from 'rxjs';
import { updateProductCart } from '@app/stores/product/product.actions';
import { ProductService } from '@app/product/services/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  productCart$: Observable<ProductCart[]>;
  products: Product[] = [];
  productCart: ProductCart[] = [];
  productCartSubscription: Subscription | undefined;
  productCartMap: Map<number, number> = new Map();

  constructor(
    private store: Store<AppState>,
    private productService: ProductService
  ) {
    this.products = this.productService.getProducts();
    this.productCart$ = this.store.select(productCartSelector)
    this.productCartSubscription = this.productCart$.subscribe((productCart) => {
      this.productCart = productCart;
      productCart.forEach((product) => {
        this.productCartMap.set(product.productId, product.counter)
      })
    })
  }

  getProductCart() {
    return this.productCart;
  }

  addProductToCart(product: Product) {
    const productCounter = this.productCartMap.get(product.id);
    this.productCartMap.set(product.id, productCounter != undefined ? productCounter + 1 : 0);
    const newProductCart = this.unmapProductCart();
    this.store.dispatch(updateProductCart({productCart: newProductCart}));
  }

  removeProductFromCart(product: Product) {
    const productCounter = this.productCartMap.get(product.id);
    this.productCartMap.set(product.id,
       productCounter != undefined && productCounter > 0 ? productCounter - 1 : 0);
    const newProductCart = this.unmapProductCart();
    this.store.dispatch(updateProductCart({productCart: newProductCart}));
  }

  unmapProductCart() {
    const newProductCart: ProductCart[] = [];
    this.productCartMap.forEach((value, key) => {
      const price = this.getPriceOfProduct(key);
      newProductCart.push({ "productId": key, "counter": value, "totalPrice": value * price});
    });
    return newProductCart;
  }

  getPriceOfProduct(productId: number) {
    const product = this.products.find(product => product.id === productId);
    if(product) return product.price;
    return 0
  }

  ngOnDestroy() {
    if(this.productCartSubscription)
      this.productCartSubscription.unsubscribe();
  }
}
