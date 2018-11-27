define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PlayerData = (function () {
        function PlayerData() {
            this.name = "";
            this.team = 0;
            this.id = 0;
            this.stamina = 0;
            this.off = 0;
            this.def = 0;
            this.speed = 0;
            this.pass = 0;
        }
        PlayerData.prototype.fromJson = function (json) {
            for (var key in json) {
                if (this.hasOwnProperty(key)) {
                    this[key] = json[key];
                }
            }
        };
        return PlayerData;
    }());
    exports.PlayerData = PlayerData;
});
