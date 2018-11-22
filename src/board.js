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
define(["require", "exports", "./tile"], function (require, exports, tile_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Board = (function (_super) {
        __extends(Board, _super);
        function Board() {
            var _this = _super.call(this) || this;
            _this.tiles = [];
            _this.init();
            return _this;
        }
        Board.prototype.init = function () {
            for (var i = 0; i < Board.HEIGHT; i++) {
                for (var j = 0; j < Board.WIDTH; j++) {
                    var tile_2 = new tile_1.Tile();
                    this.addChild(tile_2);
                    tile_2.id = this.tiles.length;
                    this.tiles.push(tile_2);
                    tile_2.x = j * 50;
                    tile_2.y = i * 50;
                }
            }
            var tile = new tile_1.Tile();
            this.addChild(tile);
            tile.id = this.tiles.length;
            this.tiles.push(tile);
            tile.x = -1 * 50;
            tile.y = 4 * 50;
            tile = new tile_1.Tile();
            this.addChild(tile);
            tile.id = this.tiles.length;
            this.tiles.push(tile);
            tile.x = Board.WIDTH * 50;
            tile.y = 4 * 50;
        };
        Board.WIDTH = 16;
        Board.HEIGHT = 9;
        return Board;
    }(PIXI.Container));
    exports.Board = Board;
});
