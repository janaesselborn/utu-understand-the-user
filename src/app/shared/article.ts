export class Article {
    title: string;
    shortDescription: string;
    content?: string;
    image?: string;

    constructor(
        title: string,
        shortDescription: string,
        content?: string,
        image?: string
    ) {
        this.title = title;
        this.shortDescription = shortDescription;
        this.content = content;
        this.image = image;
    }
}
