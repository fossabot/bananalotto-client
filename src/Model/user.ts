export class User {
    public grid?: number;
    public address?: string;
    public address2?: string;
    public birthdate?: string;
    public city?: string;
    public email?: string;
    public firstname?: string;
    public ip?: string;
    public lastname?: string;
    public id?: string;
    public signupDate?: string;
    public tel?: string;
    public zip?: string;

    get canPlay() {
        return this.grid !== undefined ? this.grid < 10 : false;
    }
}
