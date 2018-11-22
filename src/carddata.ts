/// <reference path="./_all.d.ts" />
export class CardData
{
    static cards = [];

    static init()
    {
        CardData.cards.push({
            name: "Henk",
            type: "PLAYER",
            oms: "",
            stat: {off: 40, offDist: 5, def: 20, pass: 40, passDist: 4, move: 40}
        });
        CardData.cards.push({
            name: "Truus",
            type: "PLAYER",
            oms: "",
            stat: {off: 40, offDist: 5, def: 20, pass: 40, passDist: 4, move: 40}
        });
    }

}