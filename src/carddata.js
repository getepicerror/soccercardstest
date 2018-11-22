define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CardData = (function () {
        function CardData() {
        }
        CardData.init = function () {
            CardData.cards.push({
                name: "Henk",
                type: "PLAYER",
                oms: "",
                stat: { off: 40, offDist: 5, def: 20, pass: 40, passDist: 4, move: 40 }
            });
            CardData.cards.push({
                name: "Truus",
                type: "PLAYER",
                oms: "",
                stat: { off: 40, offDist: 5, def: 20, pass: 40, passDist: 4, move: 40 }
            });
        };
        CardData.cards = [];
        return CardData;
    }());
    exports.CardData = CardData;
});
