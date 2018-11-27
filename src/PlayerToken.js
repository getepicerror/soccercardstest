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
    var PlayerToken = (function (_super) {
        __extends(PlayerToken, _super);
        function PlayerToken(data) {
            var _this = _super.call(this) || this;
            _this.data = data;
            _this.back = new PIXI.Graphics();
            _this.draw();
            return _this;
        }
        PlayerToken.prototype.draw = function () {
            this.back.clear();
            this.back.beginFill(0xffffff, 1);
            this.back.drawRect(-30, -30, 60, 60);
        };
        return PlayerToken;
    }(PIXI.Container));
    exports.PlayerToken = PlayerToken;
});
