import { from, Observable } from 'rxjs';
import { UserRepositoryLocal } from '../../infrastructure/repositories';
import { User } from '../entities';

export class RegisterUser {

    constructor(private userRepository: UserRepositoryLocal){}

    register(user: User): Observable<User>{
        user._date = new Date();
        if(!user.isValidEmail()) throw new Error('Email is not valid!');

        return from(this.userRepository.save(user));
    }
}