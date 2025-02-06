import { EmailUtils } from "../../utils";

export class User {
    constructor(
        public email: string,
        public sctpsd: string,
        public date: Date
    ){}
    set _date(date: Date){
        this.date = date;
    }

    get _date(){
        return this.date;
    }

    set _email(email: string){
        this.email = email;
    }

    get _email(){
        return this.email;
    }
    set _sctpsd(sctpsd: string){
        this.sctpsd = sctpsd;
    }

    get _sctpsd(){
        return this.sctpsd;
    }

    isValidEmail(): boolean {
        return EmailUtils.isValidEmail(this._email);
    }
}