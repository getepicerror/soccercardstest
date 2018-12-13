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
    var Card = (function (_super) {
        __extends(Card, _super);
        function Card() {
            var _this = _super.call(this) || this;
            _this.offence = -1;
            _this.defence = -1;
            _this.move = -1;
            _this.pass = -1;
            _this.stamina = -1;
            _this.type = "";
            _this.name = "";
            _this.desc = "";
            return _this;
        }
        Card.prototype.init = function () {
            this.back = new PIXI.Graphics();
            this.back.beginFill(0xffffff, 1);
            this.back.drawRoundedRect(-40, -55, 80, 110, 10);
            this.addChild(this.back);
            this.nameField = TextFieldFactory_1.TextFieldFactory.getTitleField();
            this.nameField.anchor.set(0.5, 0);
            this.nameField.position.set(0, -53);
            this.addChild(this.nameField);
            switch (this.type) {
                case "PLAYER":
                    break;
                case "EFFECT":
                    this.descField = TextFieldFactory_1.TextFieldFactory.getCardField();
                    this.descField.anchor.set(0.5, 0);
                    this.descField.position.set(0, -30);
                    this.addChild(this.descField);
                    break;
                case "ACTION":
                    this.descField = TextFieldFactory_1.TextFieldFactory.getCardField();
                    this.descField.anchor.set(0.5, 0);
                    this.descField.position.set(0, -30);
                    this.addChild(this.descField);
                    break;
            }
        };
        Card.prototype.draw = function () {
            this.nameField.text = "" + this.name;
            switch (this.type) {
                case "PLAYER":
                    break;
                case "EFFECT":
                    this.descField.text = "" + this.desc;
                    break;
                case "ACTION":
                    this.descField.text = "" + this.desc;
                    break;
            }
        };
        Card.fromData = function (data) {
            var instance = new Card();
            for (var key in data) {
                if (instance.hasOwnProperty(key)) {
                    instance[key] = data[key];
                }
            }
            instance.init();
            instance.draw();
            return instance;
        };
        return Card;
    }(PIXI.Container));
    exports.Card = Card;
});
