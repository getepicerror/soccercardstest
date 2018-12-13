/// <reference path="./_all.d.ts" />
import {Board} from "./board";
import Point = PIXI.Point;
import {Ball} from "./ball";
import {PlayerToken} from "./PlayerToken";
import {PlayerData} from "./PlayerData";
import {CardData} from "./carddata";
import {Card} from "./card";

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
    public team1Hand: number[] = [1, 2, 3, 4, 5];
    public team2Hand: number[] = [1, 2];
    public team1Board: number[] = [0, 1, 2, 0];
    public team2Board: number[] = [0, 1, 2, 0];
    public team1PosID: number[] = [62, 65, 20, 110];
    public team2PosID: number[] = [73, 70, 71, 72];
    public team1Tokens: PlayerToken[] = [];
    public team2Tokens: PlayerToken[] = [];
    public ball: Ball;
    public ballID = 35;
    public board: Board;
    public hand1: PIXI.Container;
    public hand2: PIXI.Container;

    public constructor() {
        super();
        this.board = new Board();
        this.board.position.set(100, 120);
        this.addChild(this.board);
        this.board.scale.set(1);

        this.hand1 = new PIXI.Container();
        this.hand1.position.set(400, 700);
        this.addChild(this.hand1);
        this.hand2 = new PIXI.Container();
        this.hand2.position.set(400, 0);
        this.addChild(this.hand2);

        this.initGame();
        this.syncHands();

    }

    private initGame() {
        this.ball = new Ball();
        this.ball.position = this.idToPos(this.ballID);
        this.board.addChild(this.ball);
        console.log(CardData.cards);

        for (let i = 0; i < 4; i++) {
            let token = PlayerToken.fromData(CardData.cards[this.team1Board[i]]);
            token.position = this.idToPos(this.team1PosID[i]);
            this.board.addChild(token);
        }

        for (let i = 0; i < 4; i++) {
            let token = PlayerToken.fromData(CardData.cards[this.team2Board[i]]);
            token.position = this.idToPos(this.team2PosID[i]);
            this.board.addChild(token);
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

    public syncHands() {
        this.hand1.removeChildren();
        for (let i = 0; i < this.team1Hand.length; i++) {
            let card = Card.fromData(CardData.cards[this.team1Hand[i]]);
            this.hand1.addChild(card);
            card.x = i * 90;
            // card.rotation = i * 3;
        }

        this.hand2.removeChildren();
        for (let i = 0; i < this.team2Hand.length; i++) {
            let card = Card.fromData(CardData.cards[this.team2Hand[i]]);
            this.hand2.addChild(card);
            card.x = i * 90;
            // card.rotation = i * 3;
        }
    }
}