/// <reference path="./_all.d.ts" />
import {Board} from "./board";

export class Match extends PIXI.Container
{
    public team1Name:string;
    public team2Name:string;
    public team1Color:number;
    public team2Color:number;
    public team1Score:number;
    public team2Score:number;
    public turn:number;
    public currentTeam:number;
    public team1Deck:number[] = [];
    public team2Deck:number[] = [];
    public team1Hand:number[] = [];
    public team2Hand:number[] = [];

    public board:Board;

    public constructor(){
        super();
        this.board = new Board();
        this.board.position.set(180, 120);
        this.addChild(this.board);
        this.board.scale.set(1);
    }

    private initGame(){

    }
}