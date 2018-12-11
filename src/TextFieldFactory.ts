export class TextFieldFactory {
    public static tokenStyle = {fill: 0xffffff, fontFamily: "Arial", fontSize: 24};

    public static getTokenField(): PIXI.Text {
        let tf = new PIXI.Text("", this.tokenStyle);
        tf.scale.set(0.5);
        return tf;
    }
}