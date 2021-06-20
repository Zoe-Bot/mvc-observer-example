import { Observable } from "./Observable";

export class Model extends Observable {
    private color: string

    constructor() {
        super()
        this.color = "blue"
    }

    setColor(color) {
        this.color = color

        this.notifyObserver(this.color)
    }
}