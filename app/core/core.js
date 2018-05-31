module.exports=class{
    constructor(){
        this.initModules()
        // this.refreshModules()
    }
    initModules(){
        console.log('Init'); 
        global._path=   new(require('./path'))();
        console.log(_path)
        global._config= new(require('./config'))();
        if(_config.app.mode=='dev')global._dev=require('./dev')
        global._log=    new(require('./log'))();
        global._route=  new(require('./route'))();
        global._express=require('./express');
    }
    deleteModules(){ 
        if(_path.destructor)    _path.destructor();
        if(_config.destructor)  _config.destructor();
        if(_dev.destructor)     _dev.destructor();
        if(_log.destructor)     _log.destructor();
        if(_route.destructor)   _route.destructor();
        if(_express.destructor) _express.destructor();
    }
}