export class TextFieldFactory {
    public static tokenStyle = {fill: 0xffffff, fontFamily: "Arial", fontSize: 24};
    public static titleStyle = {fill: 0xcccccc, fontFamily: "Arial", fontStyle: "bold", fontSize: 24};
    public static cardStyle = {fill: 0xcccccc, fontFamily: "Arial", fontSize: 24, wordWrapWidth: 155, wordWrap: true};

    public static getTokenField(): PIXI.Text {
        let tf = new PIXI.Text("", this.tokenStyle);
        tf.scale.set(0.5);
        return tf;
    }

    public static getCardField(): PIXI.Text {
        let tf = new PIXI.Text("", this.cardStyle);
        tf.scale.set(0.5);
        return tf;
    }

    public static getTitleField(): PIXI.Text {
        let tf = new PIXI.Text("", this.titleStyle);
        tf.scale.set(0.5);
        return tf;
    }
}