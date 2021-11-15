class Dep{
    watchers = [];
    // 添加订阅的watcher
    addSub(watcher){
        if (this.watchers.indexOf(watcher) === -1){
            this.watchers.push(watcher);
        }
    }
    // 发布，通知订阅
    notify(){
        console.log('this...', this);
        this.watchers.forEach(watcher=>watcher.update())
    }
}

export default Dep;