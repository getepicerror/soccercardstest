define(["require", "exports", "./stage"], function (require, exports, stage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Main = (function () {
        function Main() {
            this.pixelRatio = 1;
            this.pixiDimensions = new PIXI.Rectangle(0, 0, 1280, 720);
            this.loadFonts();
        }
        Main.prototype.loadFonts = function () {
            var _this = this;
            window["WebFont"].load({
                custom: {
                    families: ['FontAwesome'],
                    urls: [
                        './css/FontAwesome.css'
                    ]
                },
                loading: function () { return _this.onFontsLoaded(); }
            });
        };
        Main.prototype.onFontsLoaded = function () {
            var _this = this;
            this.stage = new stage_1.Stage();
            PIXI.utils.skipHello();
            this.renderer = PIXI.autoDetectRenderer(this.pixiDimensions.width, this.pixiDimensions.height, {
                antialias: true,
                transparent: false,
                resolution: this.pixelRatio,
                view: window.document.getElementById("pixistage")
            });
            this.renderer.backgroundColor = 0xf9f9f9;
            this.renderer.view.tabIndex = 1;
            this.renderer.view.addEventListener('blur', function (e) { return _this.onBlur(e); });
            this.renderer.view.addEventListener('focus', function (e) { return _this.onFocus(e); });
            this.renderer.view.addEventListener('mouseover', function (e) { return _this.onFocus(e); });
            this.renderer.view.addEventListener('mouseout', function (e) { return _this.onBlur(e); });
            this.renderer.view.focus();
            this.renderer.render(this.stage);
            PIXI.ticker.shared.add(function (dt) { return _this.pixiLoop(dt); });
        };
        Main.prototype.onBlur = function (e) {
            PIXI.ticker.shared.stop();
        };
        Main.prototype.onFocus = function (e) {
            PIXI.ticker.shared.start();
        };
        Main.prototype.pixiLoop = function (dt) {
            this.stage.loop(dt);
            this.renderer.render(this.stage);
        };
        return Main;
    }());
    exports.Main = Main;
});
