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
    var Tile = (function (_super) {
        __extends(Tile, _super);
        function Tile() {
            var _this = _super.call(this) || this;
            _this._id = -1;
            _this.interactive = true;
            _this.buttonMode = true;
            _this.back = new PIXI.Graphics();
            _this.addChild(_this.back);
            _this.draw();
            return _this;
        }
        Tile.prototype.draw = function () {
            this.back.lineStyle(2, 0xeeeeee, 1);
            if (this._id % 2 == 1) {
                this.back.beginFill(0x000000, 0.012);
            }
            else {
                this.back.beginFill(0x000000, 0);
            }
            this.back.drawRect(-board_1.Board.TILE_SIZE / 2, -board_1.Board.TILE_SIZE / 2, board_1.Board.TILE_SIZE, board_1.Board.TILE_SIZE);
        };
        Object.defineProperty(Tile.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (id) {
                this._id = id;
                this.draw();
            },
            enumerable: true,
            configurable: true
        });
        return Tile;
    }(PIXI.Container));
    exports.Tile = Tile;
});
