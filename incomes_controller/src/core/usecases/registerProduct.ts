import { Observable } from "rxjs";
import { ProductRepositoryLocal } from "../../infrastructure/repositories";
import { Product } from "../entities";

export class RegisterProduct {
    constructor(private prodRepository: ProductRepositoryLocal){}

    register(product: Product): Observable<boolean> {
        if(!product.isValidProduct()) throw new Error('Each field should be filled!');

        return this.prodRepository.register(product);
    }
}