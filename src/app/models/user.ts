export class User {
    public id: number;
    public email: string;
    public plainPassword: string;
    public password: string;
    public lastname: string;
    public firstname: string;
    public street: string;
    public postalcode: string;
    public city: string;
    public numtel: string;
    public carbrand: string;
    public username: string;
    constructor(
        ) {
        this.id = 0;
        this.email = '';
        this.plainPassword = '';
        this.password = '';
        this.lastname = '';
        this.firstname = '';
        this.street = '';
        this.postalcode = '';
        this.city = '';
        this.numtel = '';
        this.carbrand = '';
        this.username = '';

    }
}