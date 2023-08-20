"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 7;
    }
}
// const asdf = new TakePhoto("front", "asd") --> you cannot create an object front abstract class
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getStatus() {
        console.log("5024465");
    }
}
const asdf = new Instagram("front", "asd", 4);
asdf.getReelTime();
