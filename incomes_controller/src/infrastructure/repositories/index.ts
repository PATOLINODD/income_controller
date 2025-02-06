import { UserRepositoryLocal } from "./entities/userRepositoryLocal";
import { ApiUserRepository } from "./entities/apiUserRepository";
import { SendEmailRepository } from "./apis/sendEmailRepository";
import { LocalStorage } from "./dataAccess/localStorage";
import { SendEmailRepositoryLocal } from "./apis/sendEmailRepositoryLocal";
import { ProductRepositoryLocal } from "./entities/productRepositoryLocal";
import { ProductRepository } from "./entities/productRepository";

export type {
    UserRepositoryLocal,
    SendEmailRepositoryLocal,
    ProductRepositoryLocal
}

export {
    ApiUserRepository,
    SendEmailRepository,
    LocalStorage,
    ProductRepository
}