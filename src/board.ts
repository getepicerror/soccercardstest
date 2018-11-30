/// <reference path="./_all.d.ts" />
import {Tile} from "./tile";

export class Board extends PIXI.Container {
    public static WIDTH = 15;
    public static HEIGHT = 9;
    public static TILE_SIZE = 50;
    private tiles = [];

    constructor() {
        super();
        this.init();
    }

    private init() {
        for (let i = 0; i < Board.HEIGHT; i++) {
            for (let j = 0; j < Board.WIDTH; j++) {
                let tile = new Tile();
                this.addChild(tile);
                tile.id = this.tiles.length;
                this.tiles.push(tile);
                tile.x = j * Board.TILE_SIZE;
                tile.y = i * Board.TILE_SIZE;
            }
        }

        //goal1
        let tile = new Tile();
        this.addChild(tile);
        tile.id = this.tiles.length;
        this.tiles.push(tile);
        tile.x = -1 * Board.TILE_SIZE;
        tile.y = 4 * Board.TILE_SIZE;

        //goal2
        tile = new Tile();
        this.addChild(tile);
        tile.id = this.tiles.length + 1;
        this.tiles.push(tile);
        tile.x = Board.WIDTH * Board.TILE_SIZE;
        tile.y = 4 * Board.TILE_SIZE;
    }
}