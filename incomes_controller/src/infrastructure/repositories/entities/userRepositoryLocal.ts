import { Observable } from 'rxjs';
import { User } from '../../../core/entities';

export interface UserRepositoryLocal {
    save(user: User): Observable<User>;
    findByEmail(email: string): Observable<User | null>;
    verifyEmail(): void;
    saveInLocalStorage(user: User): void;
}