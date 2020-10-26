import {Comment} from './comment';

export class FeatureVoting {
    title: string;
    description?: string;
    votes = 0;
    comments?: Comment[];
    image?: string;

    constructor(
        title: string,
        description?: string,
        votes?: number,
        comments?: Comment[],
        image?: string
    ){
        this.title = title;
        this.description = description;
        this.votes = votes;
        this.comments = comments;
        this.image = image;
    }
}
