define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Images = (function () {
        function Images() {
        }
        Images.SPRITE_SHEET = "src/assets/img/spritesheet.json";
        Images.BACK = "src/assets/img/back-blur.jpg";
        Images.preloadList = [
            Images.SPRITE_SHEET,
            Images.BACK
        ];
        return Images;
    }());
    exports.Images = Images;
});
