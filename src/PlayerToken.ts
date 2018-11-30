/// <reference path="./_all.d.ts" />
import { PlayerData } from "./PlayerData";

export class PlayerToken extends PIXI.Container {
    private back: PIXI.Graphics;
    public offence:number = -1;
    public defence:number = -1;
    public move:number = -1;
    public pass:number = -1;
    public stamina:number = -1;

    constructor() {
        super();
        this.back = new PIXI.Graphics();
        this.addChild(this.back);
        this.draw();
    }

    public draw() {
        this.back.clear();
        this.back.beginFill(0xff0000, 0.03);
        this.back.drawRect(-30, -30, 60, 60);
    }

    public static fromData(data): PlayerToken {
        let instance = new PlayerToken();
        for (let key in data) {
            if (instance.hasOwnProperty(key)) {
                instance[key] = data[key];
            }
        }
        instance.draw();
        return instance;
    }

}