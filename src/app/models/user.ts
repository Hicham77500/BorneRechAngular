export class User {
    public id: number;
    public email: string;
    public plainPassword: string;
    public password: string;
    public genre: string;
    public alias: string;
    public lastname: string;
    public firstname: string;
    public street: string;
    public postalcode: string;
    public city: string;
    public numtel: string;
    public carbrand: string;
    public carmodel: string;
    public roles: string[];
    public role: string;
    constructor(
        ) {
        this.id = 0;
        this.email = '';
        this.plainPassword = '';
        this.password = '';
        this.genre = '';
        this.alias = '';
        this.lastname = '';
        this.firstname = '';
        this.street = '';
        this.postalcode = '';
        this.city = '';
        this.numtel = '';
        this.carbrand = '';
        this.carmodel = '';
        
        this.roles = [];
        this.role = '';    
    }
}