/// <reference path="./_all.d.ts" />

export class Ball extends PIXI.Graphics {
    constructor() {
        super();
        this.draw();
    }

    private draw() {
        this.beginFill(0xffffff, 1);
        this.drawCircle(0, 0, 7);
    }
}