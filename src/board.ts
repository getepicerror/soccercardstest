/// <reference path="./_all.d.ts" />
import { Tile } from "./tile";

export class Board extends PIXI.Container
{
    public static WIDTH = 16;
    public static HEIGHT = 9;
    private tiles = [];

    constructor()
    {
        super();
        this.init();
    }

    private init()
    {
        for (let i = 0; i < Board.HEIGHT; i++)
        {
            for (let j = 0; j < Board.WIDTH; j++)
            {
                let tile = new Tile();
                this.addChild(tile);
                tile.id = this.tiles.length;
                this.tiles.push(tile);
                tile.x = j * 50;
                tile.y = i * 50;
            }
        }

        //goal1
        let tile = new Tile();
        this.addChild(tile);
        tile.id = this.tiles.length;
        this.tiles.push(tile);
        tile.x = -1 * 50;
        tile.y = 4 * 50;

        //goal2
        tile = new Tile();
        this.addChild(tile);
        tile.id = this.tiles.length;
        this.tiles.push(tile);
        tile.x = Board.WIDTH * 50;
        tile.y = 4 * 50;
    }
}