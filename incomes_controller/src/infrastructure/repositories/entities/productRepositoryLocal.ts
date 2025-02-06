import { Observable } from "rxjs";
import { Product } from "../../../core/entities";

export interface ProductRepositoryLocal {
    register(product: Product): Observable<boolean>
}