class Dep{
    watchers = [];
    addSub(watcher){
        if (this.watchers.indexOf(watcher) === -1){
            this.watchers.push(watcher);
        }
    }
    notify(){
        console.log('this...', this);
        this.watchers.forEach(watcher=>watcher.update())
    }
}

export default Dep;