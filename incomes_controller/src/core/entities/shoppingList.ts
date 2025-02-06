import { Product } from "./product";

export class ShoppingList {
    constructor(
        public products: Product[],
        public total_spent: number,
    ) {
        this.total_spent = this.products.reduce((acc, product) => { return acc + product.price }, 0);
    }
}