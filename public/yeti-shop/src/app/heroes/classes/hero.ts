export class Hero {
    readonly id: number;
    protected _name: string;

    constructor(readonly _id : number, name : string){
        this.name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

}