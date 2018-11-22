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
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Tile = (function (_super) {
        __extends(Tile, _super);
        function Tile() {
            var _this = _super.call(this) || this;
            _this.id = -1;
            _this.back = new PIXI.Graphics();
            _this.addChild(_this.back);
            _this.draw();
            return _this;
        }
        Tile.prototype.draw = function () {
            this.back.lineStyle(2, 0xeeeeee, 1);
            this.back.drawRect(0, 0, 50, 50);
        };
        return Tile;
    }(PIXI.Container));
    exports.Tile = Tile;
});
