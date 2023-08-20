abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }

    abstract getStatus(): void //no defination is provided but extended class needs to implement this
    getReelTime(): number {
        return 7;
    }
}

// const asdf = new TakePhoto("front", "asd") --> you cannot create an object front abstract class

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) { super(cameraMode, filter) }

    public getStatus(): void {
        console.log("5024465");
    }
}

const asdf = new Instagram("front", "asd", 4)

asdf.getReelTime();