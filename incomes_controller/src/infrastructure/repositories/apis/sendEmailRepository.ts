import { Injectable } from "@angular/core";
import { EmailContent, User } from "../../../core/entities";
import { SendEmail } from "../../../libs/sendEmail";
import { SendEmailRepositoryLocal } from "./sendEmailRepositoryLocal";


@Injectable({
    providedIn: 'root'
})
export class SendEmailRepository implements SendEmailRepositoryLocal{

    send(email: EmailContent, user: User): void {
        SendEmail.send(email, user)
    }
}