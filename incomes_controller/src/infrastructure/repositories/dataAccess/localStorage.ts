export class LocalStorage {

    static add(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    static get(key: string): string | null {
        return localStorage.getItem(key)
    }
}