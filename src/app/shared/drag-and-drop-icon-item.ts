export class DragAndDropIconItem {
    type: 'TechnicalDevice' | 'Brand' | 'Hobby';
    name?: string;
    icon?: string;

    constructor(type: 'TechnicalDevice' | 'Brand' | 'Hobby', name?: string, icon?: string) {
        this.type = type;
        this.name = name;
        this.icon = icon;
    }
}

