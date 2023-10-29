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

interface ProductId {
    "productId": number
}

interface ProductState {
    "products": Product[],
    "categories": ProductCategory[],
    "productNameSearch"?: string,
    "selectedCategory"?: ProductCategory,
    "productCart": ProductId[]
}

interface AppState {
    products: ProductState;
}