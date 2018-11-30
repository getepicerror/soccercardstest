/// <reference path="./_all.d.ts" />
import {Board} from "./board";
import Point = PIXI.Point;
import {Ball} from "./ball";
import {PlayerToken} from "./PlayerToken";

export class Match extends PIXI.Container {
    public team1Name: string = "Team1";
    public team2Name: string = "Team2";
    public team1Color: number = 0xff0000;
    public team2Color: number = 0x00ff00;
    public team1Score: number = 0;
    public team2Score: number = 0;
    public turn: number = 0;
    public currentTeam: number = 0;
    public team1Deck: number[] = [];
    public team2Deck: number[] = [];
    public team1Hand: number[] = [];
    public team2Hand: number[] = [];
    public team1Tokens: PlayerToken[] = [];
    public team2Tokens: PlayerToken[] = [];
    public ball: Ball;
    public ballID = 35;

    public board: Board;

    public constructor() {
        super();
        this.board = new Board();
        this.board.position.set(180, 120);
        this.addChild(this.board);
        this.board.scale.set(1);
        this.initGame();
    }

    private initGame() {
        this.ball = new Ball();
        this.ball.position = this.idToPos(this.ballID);
        this.board.addChild(this.ball);

        for (let i = 0; i < 4; i++) {
            let token = new PlayerToken();
        }
    }

    private idToPos(id: number): Point {
        let x = id % Board.WIDTH * Board.TILE_SIZE;
        let y = Math.floor(id / Board.WIDTH) * Board.TILE_SIZE;
        return new Point(x, y);
    }

    private idToX(id: number): number {
        return id % Board.WIDTH * Board.TILE_SIZE;
    }

    private idToY(id: number): number {
        return Math.floor(id / Board.WIDTH) * Board.TILE_SIZE;
    }
}