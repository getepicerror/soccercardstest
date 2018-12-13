define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TextFieldFactory = (function () {
        function TextFieldFactory() {
        }
        TextFieldFactory.getTokenField = function () {
            var tf = new PIXI.Text("", this.tokenStyle);
            tf.scale.set(0.5);
            return tf;
        };
        TextFieldFactory.getCardField = function () {
            var tf = new PIXI.Text("", this.cardStyle);
            tf.scale.set(0.5);
            return tf;
        };
        TextFieldFactory.getTitleField = function () {
            var tf = new PIXI.Text("", this.titleStyle);
            tf.scale.set(0.5);
            return tf;
        };
        TextFieldFactory.tokenStyle = { fill: 0xffffff, fontFamily: "Arial", fontSize: 24 };
        TextFieldFactory.titleStyle = { fill: 0xcccccc, fontFamily: "Arial", fontStyle: "bold", fontSize: 24 };
        TextFieldFactory.cardStyle = { fill: 0xcccccc, fontFamily: "Arial", fontSize: 24, wordWrapWidth: 155, wordWrap: true };
        return TextFieldFactory;
    }());
    exports.TextFieldFactory = TextFieldFactory;
});
