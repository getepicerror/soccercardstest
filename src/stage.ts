/// <reference path="./_all.d.ts" />
import { Board } from "./board";

export class Stage extends PIXI.Container {
    private board: Board;

    constructor() {
        console.log("yep");
        super();
        this.setup();
    }

    private setup() {
        this.board = new Board();
        this.board.position.set(180, 120);
        this.addChild(this.board);
        this.board.scale.set(1);
    }

    public loop(dt): void {

    }
}