/// <reference path="./_all.d.ts" />
import {TextFieldFactory} from "./TextFieldFactory";

export class Card extends PIXI.Container {
    private back: PIXI.Graphics;
    public offence: number = -1;
    public defence: number = -1;
    public move: number = -1;
    public pass: number = -1;
    public stamina: number = -1;
    public type: string = "";
    public cost;
    public name: string = "";
    public desc: string = "";
    private nameField: PIXI.Text;
    private costField: PIXI.Text;
    private descField: PIXI.Text;
    private typeField: PIXI.Text;

    private offField: PIXI.Text;
    private defField: PIXI.Text;
    private movField: PIXI.Text;
    private pasField: PIXI.Text;
    private staField: PIXI.Text;

    constructor() {
        super();
    }

    private init() {
        this.back = new PIXI.Graphics();
        this.back.beginFill(0xffffff, 1);
        this.back.drawRoundedRect(-40, -55, 80, 110, 10);
        this.addChild(this.back);

        this.nameField = TextFieldFactory.getTitleField();
        this.nameField.anchor.set(0.5, 0);
        this.nameField.position.set(0, -53);
        this.addChild(this.nameField);
        switch (this.type) {
            case "PLAYER":
                break;
            case "EFFECT":
                this.descField = TextFieldFactory.getCardField();
                this.descField.anchor.set(0.5, 0);
                this.descField.position.set(0, -30);
                this.addChild(this.descField);
                break;
            case "ACTION":
                this.descField = TextFieldFactory.getCardField();
                this.descField.anchor.set(0.5, 0);
                this.descField.position.set(0, -30);
                this.addChild(this.descField);
                break;
        }
    }

    public draw() {
        this.nameField.text = "" + this.name;
        switch (this.type) {
            case "PLAYER":
                break;
            case "EFFECT":
                this.descField.text = "" + this.desc;
                break;
            case "ACTION":
                this.descField.text = "" + this.desc;
                break;
        }
    }

    public static fromData(data): Card {
        let instance = new Card();
        for (let key in data) {
            if (instance.hasOwnProperty(key)) {
                instance[key] = data[key];
            }
        }
        instance.init();
        instance.draw();
        return instance;
    }
}