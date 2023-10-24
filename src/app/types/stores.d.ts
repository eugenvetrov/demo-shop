interface Product {
    "id": number,
    "name": string,
    "category": number,
    "price": number
}

interface ProductState {
    products: Product[]
}

interface AppState {
    products: ProductState;
}