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
define(["require", "exports", "./board"], function (require, exports, board_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Match = (function (_super) {
        __extends(Match, _super);
        function Match() {
            var _this = _super.call(this) || this;
            _this.team1Deck = [];
            _this.team2Deck = [];
            _this.team1Hand = [];
            _this.team2Hand = [];
            _this.board = new board_1.Board();
            _this.board.position.set(180, 120);
            _this.addChild(_this.board);
            _this.board.scale.set(1);
            return _this;
        }
        Match.prototype.initGame = function () {
        };
        return Match;
    }(PIXI.Container));
    exports.Match = Match;
});
