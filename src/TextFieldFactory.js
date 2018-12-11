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
        TextFieldFactory.tokenStyle = { fill: 0xffffff, fontFamily: "Arial", fontSize: 24 };
        return TextFieldFactory;
    }());
    exports.TextFieldFactory = TextFieldFactory;
});
