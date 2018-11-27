/// <reference path="./_all.d.ts" />
import {PlayerData} from "./PlayerData";

export class PlayerToken extends PIXI.Container
{
    private data:PlayerData;
    private back:PIXI.Graphics;
    constructor(data:PlayerData) {
        super();
        this.data = data;
        this.back = new PIXI.Graphics();
        this.draw();
    }

    private draw(){
        this.back.clear();
        this.back.beginFill(0xffffff,1);
        this.back.drawRect(-30,-30,60,60);
    }

}