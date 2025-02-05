

export class User {
    constructor(
        public email: string,
        public sctpsd: string
    ){}

    isValidEmail(): boolean {
        return /.*@.*/.test(this.email);
    }
}