import { EmailContent, User } from "../../../core/entities";


export interface SendEmailRepositoryLocal {
    send(email: EmailContent, user: User): void ;
}