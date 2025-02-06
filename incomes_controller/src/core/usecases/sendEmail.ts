import { SendEmailRepositoryLocal } from "../../infrastructure/repositories";
import { EmailContent, User } from "../entities";

export class SendEmail {

    constructor(private sendEmailRep: SendEmailRepositoryLocal){}

    send(email: EmailContent, user: User): void {
        //core logic here!
        //then delegate the functionality to send the email
        //to repository
        this.sendEmailRep.send(email, user);
    }
}