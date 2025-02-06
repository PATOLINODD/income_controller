import { Observable } from "rxjs";
import { Product } from "../../../core/entities";
import { ProductRepositoryLocal } from "./productRepositoryLocal";
import { HttpClient } from "@angular/common/http";

export class ProductRepository implements ProductRepositoryLocal{
    apiUrl: string = '';
    constructor(private http: HttpClient){}

    register(product: Product): Observable<boolean> {
        return this.http.post<boolean>(this.apiUrl, product);
    }

}