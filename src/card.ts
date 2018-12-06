/// <reference path="./_all.d.ts" />
export class Card extends PIXI.Container {
    private back: PIXI.Graphics;
    public offence:number = -1;
    public defence:number = -1;
    public move:number = -1;
    public pass:number = -1;
    public stamina:number = -1;
    public cost;
    public name:string = "";

    constructor() {
        super();
    }

    public static fromData(data): Card {
        let instance = new Card();
        for (let key in data) {
            if (instance.hasOwnProperty(key)) {
                instance[key] = data[key];
            }
        }
        return instance;
    }
}