class EventHandler {
    constructor() {
        this.events = [];
        this.spaceEvents = [];

    }

    addSpaceEvent(event) {
        this.spaceEvents.push(event)
    }

    addEvent(event) {
        this.events.push(event)
    }

    update(time) {
        for (let event of this.spaceEvents) {
            event.update();
            if (event.complete) {
                GM.UI.setPlaneImg(event.img)
                this.spaceEvents.splice(this.spaceEvents.indexOf(event), 1)
            }
        }

        for (let event of this.events) {
            event.update(time)

        }


    }
}