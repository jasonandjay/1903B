class EventBus{
    events = {}
    on(event, cb){
        let cbs = this.events[event] || [];
        this.events[event] = [...cbs, cb]
    }
    off(event, cb){
        let cbs = this.events[event] || [];
        let index = cbs.indexOf(cb);
        if (index !== -1){
            this.events[event].splice(index, 1);
        }
    }
    emit(event){
        let cbs = this.events[event] || [];
        cbs.forEach(cb=>cb())
    }
}