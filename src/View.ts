import { Controller } from "./Controller";
import { Observer } from "./Observer";

export class View implements Observer {

    private controller: Controller

    constructor(controller: Controller) {
        this.controller = controller
        console.log("view")

        document.querySelectorAll("button").forEach((button) => {
            button.addEventListener("click", (event) => {
                //@ts-ignore
                this.onButtonClick(event.target.id)
            })
        })
    }

    onButtonClick(color) {
        this.controller.changeColor(color)
    }

    update(color: string) {
        const text = document.querySelector("#text") as HTMLElement
        text.style.color = color
    }
}