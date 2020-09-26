export class TechnicalDevice {
    type = 'TechnicalDevice';
    name?: string;
    icon?: string;

    constructor(name?: string, icon?: string) {
        this.name = name;
        this.icon = icon;
    }
}
