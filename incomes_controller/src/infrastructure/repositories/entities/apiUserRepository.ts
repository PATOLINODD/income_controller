import { Injectable } from "@angular/core";
import { UserRepositoryLocal } from "./userRepositoryLocal";
import { User } from "../../../core/entities";
import { HttpClient, HttpParams } from "@angular/common/http";
import { from, Observable } from "rxjs";
import { LocalStorage } from "../dataAccess/localStorage";




@Injectable({
    providedIn: 'root'
})
export class ApiUserRepository implements UserRepositoryLocal {
    
    apiUrl = '';
    constructor(private http: HttpClient){}

    save(user: User): Observable<User> {
        return  from(this.http.post<User>(this.apiUrl, user));
    }
    findByEmail(email: string): Observable<User | null> {
        this.apiUrl.concat(`/${email}`)
        return from( this.http.get<User>(this.apiUrl));
    }
    verifyEmail(): void {
        
    }
    saveInLocalStorage(user: User): void {
        LocalStorage.add('user', user._email);
    }

}