interface Product {
    "id": number,
    "name": string,
    "category": number,
    "price": number
}

interface ProductCategory {
    "id": number,
    "name": string
}

interface ProductCart {
    "productId": number,
    "counter": number,
    "totalPrice": number
}

interface ProductState {
    "products": Product[],
    "categories": ProductCategory[],
    "productNameSearch"?: string,
    "selectedCategory"?: ProductCategory,
    "productCart": ProductCart[]
}

interface AppState {
    products: ProductState;
}