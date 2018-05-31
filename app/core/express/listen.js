module.exports=class{
    constructor(){
        console.log(222);
        this.defaultPort=8080;
        this.initHttp()
    }
    destructor(){
        this.listner.close(); 
        // module.parent.exports.app.close();
    }
    initHttp(){
        let port=(_config.app.port?_config.app.port:this.defaultPort);
        this.listner=module.parent.exports.app.listen(port,  () =>{
            this.initListen();
            _log.info('Server start listern on '+port)
        });
    } 
    initListen(){
        module.parent.exports.app.get('/*',_route.get)
        module.parent.exports.app.post('/*',_route.post)
    }

}