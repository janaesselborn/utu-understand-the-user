export class Persona {
    name: string;
    image?: string;
    jobrole?: string;

    constructor(name: string, image?: string, jobrole?: string) {
        this.name = name;
        this.image = image;
        this.jobrole = jobrole;
    }
}
