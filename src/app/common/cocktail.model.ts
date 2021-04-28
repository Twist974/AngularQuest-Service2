export class Cocktail {
    public nom : string;
    public price: number;
    public img: string;

    constructor(nom:string, price: number, img: string) {
        this.nom = nom;
        this.price = price;
        this.img = img;
    }
}