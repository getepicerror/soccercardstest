/// <reference path="./_all.d.ts" />
import {Board} from "./board";

export class Tile extends PIXI.Container {
    private back: PIXI.Graphics;
    private _id = -1;

    constructor() {
        super();
        this.interactive = true;
        this.buttonMode = true;
        this.back = new PIXI.Graphics();
        this.addChild(this.back);
        this.draw();
    }

    private draw() {
        this.back.lineStyle(2, 0xeeeeee, 1);
        if (this._id % 2 == 1) {
            this.back.beginFill(0x000000, 0.012);
        } else {
            this.back.beginFill(0x000000, 0);
        }
        this.back.drawRect(-Board.TILE_SIZE / 2, -Board.TILE_SIZE / 2, Board.TILE_SIZE, Board.TILE_SIZE);
    }

    public set id(id: number) {
        this._id = id;
        this.draw();
    }

    public get id(): number {
        return this._id;
    }
}