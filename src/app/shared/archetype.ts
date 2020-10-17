export class Archetype {
    name: string;
    icon?: string;
    description?: string;

    constructor(name: string, icon?: string, description?: string) {
        this.name = name;
        this.icon = icon;
        this.description = description;
    }
}
