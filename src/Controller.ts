import { Model } from "./Model"
import { View } from "./View"

export class Controller {

    private model: Model
    private view: View

    constructor () {
        this.model = new Model()
        this.view = new View(this)

        this.model.addObserver(this.view)
    }

    changeColor(color: string) {
        this.model.setColor(color)
    }
}