import { Observer } from "./Observer";

export class Observable {

    private observerArray: Array<Observer> = []
    
    public addObserver(observer: Observer) {
        this.observerArray.push(observer)
    }

    public notifyObserver(color: string) {
        this.observerArray.forEach(observer => {
            observer.update(color)
        })
    }
}