/// <reference path="./_all.d.ts" />
require.config({
    urlArgs: "bust=" + (new Date()).getTime(), baseUrl: "src",
    paths: {
        "pixi": "../lib/pixi.min",
        "jquery": "../lib/jquery-3.2.1.min",
        "tweenmax": "../lib/TweenMax.min",
        "timelinemax": "../lib/TimelineMax.min",
        "easePack": "../lib/EasePack.min",
        "webfontloader": "../lib/webfontloader",
    }, shim: {
        "main": ["pixi", "webfontloader", "tweenmax", "jquery"]
    }
});

require(["pixi", "webfontloader"], function (pixiClass, webfontloader)
{
    window["WebFont"] = webfontloader;
    window["PIXI"] = pixiClass;

    require(["main"], (main) =>
    {
        new main.Main();
    })
});
