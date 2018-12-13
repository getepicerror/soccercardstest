var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./board", "./ball", "./PlayerToken", "./carddata", "./card"], function (require, exports, board_1, ball_1, PlayerToken_1, carddata_1, card_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Point = PIXI.Point;
    var Match = (function (_super) {
        __extends(Match, _super);
        function Match() {
            var _this = _super.call(this) || this;
            _this.team1Name = "Team1";
            _this.team2Name = "Team2";
            _this.team1Color = 0xff0000;
            _this.team2Color = 0x00ff00;
            _this.team1Score = 0;
            _this.team2Score = 0;
            _this.turn = 0;
            _this.currentTeam = 0;
            _this.team1Deck = [];
            _this.team2Deck = [];
            _this.team1Hand = [1, 2, 3, 4, 5];
            _this.team2Hand = [1, 2];
            _this.team1Board = [0, 1, 2, 0];
            _this.team2Board = [0, 1, 2, 0];
            _this.team1PosID = [62, 65, 20, 110];
            _this.team2PosID = [73, 70, 71, 72];
            _this.team1Tokens = [];
            _this.team2Tokens = [];
            _this.ballID = 35;
            _this.board = new board_1.Board();
            _this.board.position.set(100, 120);
            _this.addChild(_this.board);
            _this.board.scale.set(1);
            _this.hand1 = new PIXI.Container();
            _this.hand1.position.set(400, 700);
            _this.addChild(_this.hand1);
            _this.hand2 = new PIXI.Container();
            _this.hand2.position.set(400, 0);
            _this.addChild(_this.hand2);
            _this.initGame();
            _this.syncHands();
            return _this;
        }
        Match.prototype.initGame = function () {
            this.ball = new ball_1.Ball();
            this.ball.position = this.idToPos(this.ballID);
            this.board.addChild(this.ball);
            console.log(carddata_1.CardData.cards);
            for (var i = 0; i < 4; i++) {
                var token = PlayerToken_1.PlayerToken.fromData(carddata_1.CardData.cards[this.team1Board[i]]);
                token.position = this.idToPos(this.team1PosID[i]);
                this.board.addChild(token);
            }
            for (var i = 0; i < 4; i++) {
                var token = PlayerToken_1.PlayerToken.fromData(carddata_1.CardData.cards[this.team2Board[i]]);
                token.position = this.idToPos(this.team2PosID[i]);
                this.board.addChild(token);
            }
        };
        Match.prototype.idToPos = function (id) {
            var x = id % board_1.Board.WIDTH * board_1.Board.TILE_SIZE;
            var y = Math.floor(id / board_1.Board.WIDTH) * board_1.Board.TILE_SIZE;
            return new Point(x, y);
        };
        Match.prototype.idToX = function (id) {
            return id % board_1.Board.WIDTH * board_1.Board.TILE_SIZE;
        };
        Match.prototype.idToY = function (id) {
            return Math.floor(id / board_1.Board.WIDTH) * board_1.Board.TILE_SIZE;
        };
        Match.prototype.syncHands = function () {
            this.hand1.removeChildren();
            for (var i = 0; i < this.team1Hand.length; i++) {
                var card = card_1.Card.fromData(carddata_1.CardData.cards[this.team1Hand[i]]);
                this.hand1.addChild(card);
                card.x = i * 90;
            }
            this.hand2.removeChildren();
            for (var i = 0; i < this.team2Hand.length; i++) {
                var card = card_1.Card.fromData(carddata_1.CardData.cards[this.team2Hand[i]]);
                this.hand2.addChild(card);
                card.x = i * 90;
            }
        };
        return Match;
    }(PIXI.Container));
    exports.Match = Match;
});
