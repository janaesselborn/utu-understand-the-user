import {Archetype} from './archetype';

export class Persona {
    name: string;
    id?: string;
    image?: string;
    age?: number;
    location?: string;
    status?: string;
    archetype?: Archetype;
    jobrole?: string;
    quote?: string;
    bio?: string;
    frustrations?: string;
    goals?: string;
    technicalDevices?: string[];
    brands?: string[];
    hobbiesInterest?: string[];
    personality?: number[];

    constructor(
        name: string,
        image?: string,
        age?: number,
        location?: string,
        status?: string,
        archetype?: Archetype,
        jobrole?: string,
        quote?: string,
        bio?: string,
        id?: string,
        frustrations?: string,
        goals?: string,
        technicalDevices?: string[],
        brands?: string[],
        hobbiesInterest?: string[],
        personality?: number[]
    ) {
        this.name = name;
        this.image = image;
        this.age = age;
        this.location = location;
        this.status = status;
        this.archetype = Archetype;
        this.jobrole = jobrole;
        this.quote = quote;
        this.bio = bio;
        this.id = id;
        this.frustrations = frustrations;
        this.goals = goals;
        this.technicalDevices = technicalDevices;
        this.brands = brands;
        this.hobbiesInterest = hobbiesInterest;
        this.personality = personality;
    }
}
