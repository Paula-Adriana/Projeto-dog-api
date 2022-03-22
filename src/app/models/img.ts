export class Img {
    message?: string;
    status?: string;

    constructor (obj: Partial<Img>) {
        Object.assign(this, obj)
    }
}
