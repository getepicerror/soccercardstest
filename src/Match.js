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
define(["require", "exports", "./board", "./ball", "./PlayerToken"], function (require, exports, board_1, ball_1, PlayerToken_1) {
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
            _this.team1Hand = [];
            _this.team2Hand = [];
            _this.team1Tokens = [];
            _this.team2Tokens = [];
            _this.ballID = 35;
            _this.board = new board_1.Board();
            _this.board.position.set(180, 120);
            _this.addChild(_this.board);
            _this.board.scale.set(1);
            _this.initGame();
            return _this;
        }
        Match.prototype.initGame = function () {
            this.ball = new ball_1.Ball();
            this.ball.position = this.idToPos(this.ballID);
            this.board.addChild(this.ball);
            for (var i = 0; i < 4; i++) {
                var token = new PlayerToken_1.PlayerToken();
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
        return Match;
    }(PIXI.Container));
    exports.Match = Match;
});
