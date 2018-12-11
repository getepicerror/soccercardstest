/// <reference path="./_all.d.ts" />
import { PlayerData } from "./PlayerData";
import { TextFieldFactory } from "./TextFieldFactory";

export class PlayerToken extends PIXI.Container {
    private back: PIXI.Graphics;
    public offence: number = -1;
    public defence: number = -1;
    public move: number = -1;
    public pass: number = -1;
    public stamina: number = -1;
    public offField: PIXI.Text;
    public defField: PIXI.Text;
    public movField: PIXI.Text;
    public pasField: PIXI.Text;
    public staField: PIXI.Text;

    constructor() {
        super();
        this.init();
        this.draw();
    }

    public init() {
        this.back = new PIXI.Graphics();
        this.addChild(this.back);
        this.offField = TextFieldFactory.getTokenField();
        this.offField.anchor.set(0, 0);
        this.offField.position.set(-22, -22);
        this.addChild(this.offField);
        this.defField = TextFieldFactory.getTokenField();
        this.defField.anchor.set(1, 0);
        this.defField.position.set(22, -22);
        this.addChild(this.defField);
        this.movField = TextFieldFactory.getTokenField();
        this.movField.anchor.set(0, 1);
        this.movField.position.set(-22, 22);
        this.addChild(this.movField);
        this.pasField = TextFieldFactory.getTokenField();
        this.pasField.anchor.set(1, 1);
        this.pasField.position.set(22, 22);
        this.addChild(this.pasField);
        this.staField = TextFieldFactory.getTokenField();
        this.staField.anchor.set(0.5);
        this.addChild(this.staField);
    }

    public draw() {
        this.back.clear();
        this.back.beginFill(0xff0000, 0.03);
        this.back.drawRect(-30, -30, 60, 60);
        this.offField.text = this.offence + "";
        this.defField.text = this.defence + "";
        this.movField.text = this.move + "";
        this.pasField.text = this.pass + "";
        this.staField.text = this.stamina + "";
    }

    public static fromData(data): PlayerToken {
        let instance = new PlayerToken();
        for (let key in data) {
            if (instance.hasOwnProperty(key)) {
                instance[key] = data[key];
            }
        }
        instance.draw();
        return instance;
    }

}