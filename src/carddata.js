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
                desc: "",
                cost: 5,
                offence: 8, defence: 1, pass: 5, move: 4, stamina: 50
            });
            CardData.cards.push({
                name: "Fred",
                type: "PLAYER",
                desc: "",
                cost: 7,
                offence: 8, defence: 1, pass: 6, move: 6, stamina: 60
            });
            CardData.cards.push({
                name: "Ali",
                type: "PLAYER",
                desc: "",
                cost: 4,
                offence: 4, defence: 4, pass: 6, move: 2, stamina: 40
            });
            CardData.cards.push({
                name: "Truus",
                type: "PLAYER",
                desc: "",
                cost: 5,
                offence: 4, defence: 5, pass: 5, move: 4, stamina: 20
            });
            CardData.cards.push({
                name: "Water bag",
                type: "EFFECT",
                desc: "Add +30 stamina to one player",
                cost: 2,
                stamina: +30
            });
            CardData.cards.push({
                name: "Move",
                type: "ACTION",
                desc: "You can move",
                cost: "n",
            });
        };
        CardData.cards = [];
        return CardData;
    }());
    exports.CardData = CardData;
});
