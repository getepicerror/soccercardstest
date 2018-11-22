/// <reference path="./_all.d.ts" />
export class Tile extends PIXI.Container
{
    private back: PIXI.Graphics;
    public id = -1;

    constructor()
    {
        super();
        this.back = new PIXI.Graphics();
        this.addChild(this.back);
        this.draw();
    }

    private draw()
    {
        this.back.lineStyle(2, 0xeeeeee, 1);
        this.back.drawRect(0, 0, 50, 50);
    }
}