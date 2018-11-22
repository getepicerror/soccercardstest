/// <reference path="./_all.d.ts" />

import { Stage } from "./stage";

export class Main {
    private renderer;
    private stage: Stage;
    private pixelRatio = 1;
    public pixiDimensions: PIXI.Rectangle = new PIXI.Rectangle(0, 0, 1280, 720);

    constructor() {
        // console.log("Scaffold created");
        this.loadFonts();
    }

    public loadFonts(): void {
        window["WebFont"].load(<WebFont.Config>{
            custom: <WebFont.Custom>{
                families: ['FontAwesome'],
                urls: [
                    './css/FontAwesome.css'
                ]
            },
            loading: () => this.onFontsLoaded()
        });
    }

    private onFontsLoaded() {
        this.stage = new Stage();
        PIXI.utils.skipHello();
        this.renderer = PIXI.autoDetectRenderer(
            this.pixiDimensions.width, this.pixiDimensions.height,
            {
                antialias: true,
                transparent: false,
                resolution: this.pixelRatio,
                view: <HTMLCanvasElement>window.document.getElementById("pixistage")
            }
        );
        this.renderer.backgroundColor = 0xf9f9f9;
        this.renderer.view.tabIndex = 1;
        this.renderer.view.addEventListener('blur', (e) => this.onBlur(e));
        this.renderer.view.addEventListener('focus', (e) => this.onFocus(e));
        this.renderer.view.addEventListener('mouseover', (e) => this.onFocus(e));
        this.renderer.view.addEventListener('mouseout', (e) => this.onBlur(e));
        this.renderer.view.focus();
        this.renderer.render(this.stage);
        PIXI.ticker.shared.add((dt) => this.pixiLoop(dt));
    }

    private onBlur(e): void {
        // console.log("blur");
        PIXI.ticker.shared.stop();
    }

    private onFocus(e): void {
        // console.log("focus");
        PIXI.ticker.shared.start();
    }

    private pixiLoop(dt): void {
        this.stage.loop(dt);
        this.renderer.render(this.stage);
    }
}
