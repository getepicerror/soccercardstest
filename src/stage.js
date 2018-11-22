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
    var Stage = (function (_super) {
        __extends(Stage, _super);
        function Stage() {
            var _this = this;
            console.log("yep");
            _this = _super.call(this) || this;
            _this.setup();
            return _this;
        }
        Stage.prototype.setup = function () {
            this.board = new board_1.Board();
            this.board.position.set(180, 120);
            this.addChild(this.board);
            this.board.scale.set(1);
        };
        Stage.prototype.loop = function (dt) {
        };
        return Stage;
    }(PIXI.Container));
    exports.Stage = Stage;
});
