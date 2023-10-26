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

interface ProductState {
    "products": Product[],
    "categories": ProductCategory[],
    "productNameSearch"?: string,
    "selectedCategory"?: ProductCategory
}



interface AppState {
    products: ProductState;
}