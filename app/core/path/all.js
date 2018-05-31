module.exports= class PathClass{
    constructor(){
        this.root= Path.resolve();
        this.config=Path.resolve()+'/config/'
    }
}