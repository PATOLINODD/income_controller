
export class EmailUtils {
    static isValidEmail(email: string): boolean {
        return /.*@.*/.test(email);
    }
}