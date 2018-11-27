/// <reference path="./_all.d.ts" />
export class PlayerData {
    public name: string = "";
    public team = 0;
    public id = 0;
    public stamina = 0;
    public off = 0;
    public def = 0;
    public speed = 0;
    public pass = 0;

    public fromJson(json) {
        for (let key in json) {
            if (this.hasOwnProperty(key)) {
                this[key] = json[key];
            }
        }
    }
}