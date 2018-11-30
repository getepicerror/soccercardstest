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
        function PlayerToken() {
            var _this = _super.call(this) || this;
            _this.offence = -1;
            _this.defence = -1;
            _this.move = -1;
            _this.pass = -1;
            _this.stamina = -1;
            _this.back = new PIXI.Graphics();
            _this.addChild(_this.back);
            _this.draw();
            return _this;
        }
        PlayerToken.prototype.draw = function () {
            this.back.clear();
            this.back.beginFill(0xff0000, 0.03);
            this.back.drawRect(-30, -30, 60, 60);
        };
        PlayerToken.fromData = function (data) {
            var instance = new PlayerToken();
            for (var key in data) {
                if (instance.hasOwnProperty(key)) {
                    instance[key] = data[key];
                }
            }
            instance.draw();
            return instance;
        };
        return PlayerToken;
    }(PIXI.Container));
    exports.PlayerToken = PlayerToken;
});
