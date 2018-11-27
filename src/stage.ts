/// <reference path="./_all.d.ts" />
import { Board } from "./board";
import {Match} from "./Match";

export class Stage extends PIXI.Container {
    private board: Board;

    constructor() {
        super();
        this.setup();
    }

    private setup() {
        let match = new Match();
        this.addChild(match);
    }

    public loop(dt): void {

    }
}