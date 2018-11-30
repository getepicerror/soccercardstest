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
                offence: 8, defence: 1, pass: 5, move: 4, stamina: 50
            });
            CardData.cards.push({
                name: "Fred",
                type: "PLAYER",
                oms: "",
                offence: 8, defence: 1, pass: 5, move: 4, stamina: 60
            });
            CardData.cards.push({
                name: "Ali",
                type: "PLAYER",
                oms: "",
                offence: 4, defence: 4, pass: 6, move: 2, stamina: 40
            });
            CardData.cards.push({
                name: "Truus",
                type: "PLAYER",
                oms: "",
                offence: 4, defence: 5, pass: 5, move: 4, stamina: 20
            });
            CardData.cards.push({
                name: "Water bag",
                type: "EFFECT",
                oms: "",
                stamina: +30
            });
        };
        CardData.cards = [];
        return CardData;
    }());
    exports.CardData = CardData;
});
