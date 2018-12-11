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
define(["require", "exports", "./TextFieldFactory"], function (require, exports, TextFieldFactory_1) {
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
            _this.init();
            _this.draw();
            return _this;
        }
        PlayerToken.prototype.init = function () {
            this.back = new PIXI.Graphics();
            this.addChild(this.back);
            this.offField = TextFieldFactory_1.TextFieldFactory.getTokenField();
            this.offField.anchor.set(0, 0);
            this.offField.position.set(-22, -22);
            this.addChild(this.offField);
            this.defField = TextFieldFactory_1.TextFieldFactory.getTokenField();
            this.defField.anchor.set(1, 0);
            this.defField.position.set(22, -22);
            this.addChild(this.defField);
            this.movField = TextFieldFactory_1.TextFieldFactory.getTokenField();
            this.movField.anchor.set(0, 1);
            this.movField.position.set(-22, 22);
            this.addChild(this.movField);
            this.pasField = TextFieldFactory_1.TextFieldFactory.getTokenField();
            this.pasField.anchor.set(1, 1);
            this.pasField.position.set(22, 22);
            this.addChild(this.pasField);
            this.staField = TextFieldFactory_1.TextFieldFactory.getTokenField();
            this.staField.anchor.set(0.5);
            this.addChild(this.staField);
        };
        PlayerToken.prototype.draw = function () {
            this.back.clear();
            this.back.beginFill(0xff0000, 0.03);
            this.back.drawRect(-30, -30, 60, 60);
            this.offField.text = "o:" + this.offence;
            this.defField.text = "d:" + this.defence;
            this.movField.text = "m:" + this.move;
            this.pasField.text = "p:" + this.pass;
            this.staField.text = this.stamina + "";
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
